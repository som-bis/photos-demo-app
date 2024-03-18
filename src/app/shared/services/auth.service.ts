import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authTokenKey = 'authToken';
  private userKey = 'user';
  private albumDetailsKey = 'albumDetails';
  userDataChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor(private snackBar: MatSnackBar, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.userDataChanged.emit();
      }
    });
  }

  login(email: string, mobile: string): boolean {
    if (email !== '' && mobile !== '') {
      const token = 'mocked_jwt_token_here';

      localStorage.setItem(this.authTokenKey, token);

      const user = { email, mobile, name: email.substring(0, email.indexOf('@')) };

      localStorage.setItem(this.userKey, JSON.stringify(user));

      this.snackBar.open('Login successful!', 'Dismiss', {
        duration: 3000,
      });

      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.albumDetailsKey);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  getUser(): any | null {
    const userData = localStorage.getItem(this.userKey);
    return userData ? JSON.parse(userData) : null;
  }
}
