import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm?: any;

  constructor(private fb: FormBuilder,
    private authService : AuthService,
    private router: Router,
    private notification: NotificationService,
    public translate: TranslateService) {
      translate.addLangs(['en', 'nl']);
      translate.setDefaultLang('en');
    }
    switchLang(lang: string) {
      this.translate.use(lang);
    }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

       // Call the authentication service's login method
       if (this.authService.login(username, password)) {
        // Navigate to the ProductListComponent upon successful login

        this.router.navigate(['/dashboard']);
      } else {
        this.notification.error("Message!", " Incorrect Password and Username");
        }

    }
  }
}
