import { Component,OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 sidebarOpened: boolean = true;
 constructor(
  private authService: AuthService,
  private toaster: ToastrService
 ){

 }
  isLoggedIn():boolean{

    return this.authService.isAuthenticatedUser();

 }
 menuButtonClicked(){
 this.sidebarOpened=!this.sidebarOpened;
 }
}
