import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [],
  imports: [],
   exports:  [
    MaterialModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TranslateModule
   ]
})
export class SharedModule { }
