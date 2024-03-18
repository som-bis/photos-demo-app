import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]] // Validation for number and exactly 10 digits
    });
  }

  login(): void {
    const { email, mobile } = this.loginForm.value;
    if (this.authService.login(email, mobile)) {
      this.router.navigate(['/landing'], { queryParams: { email } });
    } else {
    }
  }
}
