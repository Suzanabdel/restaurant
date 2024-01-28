
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { SharedModule } from './layouts/material/material/material/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToastrModule } from 'ngx-toastr';
import { HighlightDirective } from './core/directives/highlight.directive';
import { DemoPipe } from './core/pipes/demo.pipe';
import { SquarePipe } from './core/pipes/square.pipe';
import { ConfirmationDialogComponent } from './layouts/shared/dialoge/confirmation-dialog/confirmation-dialog/confirmation-dialog.component';
import { PersonDetailsComponent } from './components/person/person-details/person-detail/person-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonManagementComponent } from './components/person/person-managment/person-management/person-management.component';
import { SignupComponent } from './components/sign up/signup/signup.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    ToolbarComponent,
    HighlightDirective,
    DemoPipe,
    SquarePipe,
    ConfirmationDialogComponent,
    PersonManagementComponent,
    SignupComponent,
    PersonDetailsComponent,

  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(
      {
        timeOut: 10000
      }
    ),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
