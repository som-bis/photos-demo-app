import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  userName!: string;
  isLoggedIn: boolean = false;
  private userDataSubscription!: Subscription;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.getUser();
  }

  logout() {
    this.authService.logout();
  }

  getUser() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.userDataSubscription = this.authService.userDataChanged.subscribe(() => {
      this.isLoggedIn = this.authService.isAuthenticated();
      const user = this.authService.getUser();
      this.userName = user ? user.name : '';
    });
  }

  ngOnDestroy(): void {
    this.userDataSubscription.unsubscribe();
  }
}
