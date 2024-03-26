import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.parsedSignupData = JSON.parse(
      sessionStorage.getItem('Signup Values') || '[]'
    );
    console.log('ng', this.parsedSignupData);
  }

  parsedSignupData: any[] = [];
  signupData: any[] = [];

  signupForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onSignUp() {
    console.log(this.signupForm);
    this.signupData.push(this.signupForm.value);
    console.log(this.signupData);
    sessionStorage.setItem('Signup Values', JSON.stringify(this.signupData));
  }

  redirectToLogIn() {
    this.router.navigate(['/login']);
  }
}
