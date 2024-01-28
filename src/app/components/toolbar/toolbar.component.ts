import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() isMenuButtonClicked = new EventEmitter<void>();

  constructor(
    private authService: AuthService,
    private router: Router,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
  }
  switchLang(nl: string) {
    this.translate.use(nl);
  }

  menuButtonClicked() {
    this.isMenuButtonClicked.emit();
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
