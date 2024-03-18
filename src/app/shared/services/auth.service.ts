import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authTokenKey = 'authToken';
  private userKey = 'user';
  constructor() {}

  login(email: string, mobile: string): boolean {
    if (email !== '' && mobile !== '') {
      const token = 'mocked_jwt_token_here';

      localStorage.setItem(this.authTokenKey, token);

      const user = { email, mobile, name: 'John Doe' };

      localStorage.setItem(this.userKey, JSON.stringify(user));

      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    localStorage.removeItem(this.userKey);
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
