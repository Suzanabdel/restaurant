import { NgModule } from "@angular/core";
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
@NgModule({
    declarations: [],
    imports:[

    ],
    exports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class sharedModule{}