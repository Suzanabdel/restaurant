import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
toggleDarkTheme() {
throw new Error('Method not implemented.');
}

  sidebarOpened: boolean = true;

  constructor(
    private authService: AuthService,
    ){

  }
  isLoggedIn(): boolean{
    return this.authService.isAuthenticatedUser();
  }
  menuButtonClicked(){
    this.sidebarOpened = !this.sidebarOpened;
  }

}
