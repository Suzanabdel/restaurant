import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private router: Router) {}
  signUp() {
    // Implement your sign-up logic here, for example:
    // Navigate to the sign-up page using Angular Router
    this.router.navigate(['/signup']);
  }
}
