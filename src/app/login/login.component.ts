import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    sessionStorage.getItem('Signup Values');
  }

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    loginPassword: new FormControl('', [Validators.required]),
  });

  db: string = sessionStorage.getItem('Signup Values') ?? ''; // get the data from sign up page
  onLogin() {
    const username = this.loginForm.value.userName ?? '';
    const password = this.loginForm.value.loginPassword ?? '';
    console.log(`data  : ${typeof this.db}`);
    // Parse the session storage data as a JSON object
    const dbData: any[] = JSON.parse(this.db);

    // Loop through the dbData array
    for (const user of dbData) {
      console.log('loop called');

      // Check if the username and password match
      if (user.email === username && user.password === password) {
        // Authentication successful
        console.log('Authentication successful');
        // Redirect the user to the desired page
        this.router.navigate(['/dashboard']);
        return;
      } else {
        console.log('Invalid credentials');
        
      }
    }
  }

  redirectToSignIn() {
    this.router.navigate(['/signin']);
  }
}
