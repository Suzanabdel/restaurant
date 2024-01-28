import { Component } from "@angular/core";
import { FormBuilder,Validators,FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector:'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent{
    loginForm?: any;
    constructor(private fb: FormBuilder, private authService : AuthService, private router: Router){}

    ngOnInit(): void{
        this.loginForm = this.fb.group({
            username:['', Validators.required],
            password:['', Validators.required]
        });
    }
 onSubmit():void{
    if(this.loginForm.valid){
        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;
        if(this.authService.login(username,password)){

            this.router.navigate(['./dashboard']);
        }else{
            this.router//Handle authentication error (show error message, etc.)
        }
    }
 }
}