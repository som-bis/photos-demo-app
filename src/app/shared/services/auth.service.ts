import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router } from '@angular/router';
import { LandingService } from './landing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authTokenKey = 'authToken';
  private userKey = 'user';
  private albumDetailsKey = 'albumDetails';
  private expiryTimeKey = 'expiryTime';
  userDataChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router, private landingService: LandingService, private snackBar: MatSnackBar) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.userDataChanged.emit();
        this.checkTokenExpiry();
      }
    });
  }

  login(email: string, mobile: string): boolean {
    if (email !== '' && mobile !== '') {
      const token = 'mocked_jwt_token_here';
      const expiryTime = new Date();
      expiryTime.setHours(expiryTime.getHours() + 1);

      localStorage.removeItem(this.expiryTimeKey);
      localStorage.setItem(this.authTokenKey, token);
      localStorage.setItem(this.expiryTimeKey, expiryTime.toISOString());

      const user = { email, mobile, name: email.substring(0, email.indexOf('@')) };
      localStorage.setItem(this.userKey, JSON.stringify(user));

      this.landingService.showSuccess('Login successful!');

      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.albumDetailsKey);
    localStorage.removeItem(this.expiryTimeKey);
  }

  isAuthenticated(): boolean {
    const expiryTimeString = localStorage.getItem(this.expiryTimeKey);
    if (!expiryTimeString) {
      return false;
    }

    const expiryTime = new Date(expiryTimeString);
    return expiryTime > new Date();
  }

  getToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  getUser(): any | null {
    const userData = localStorage.getItem(this.userKey);
    return userData ? JSON.parse(userData) : null;
  }

  private checkTokenExpiry(): void {
    if (!this.isAuthenticated()) {
      this.logout();
      this.router.navigate(['/login']);
    }
  }
}
