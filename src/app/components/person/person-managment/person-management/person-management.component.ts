import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from 'src/app/modules/person';
import { ActionState } from 'src/app/core/enums/ActionState';

@Component({
  selector: 'app-person-management',
  templateUrl: './person-management.component.html',
  styleUrls: ['./person-management.component.scss']
})
export class PersonManagementComponent {
  actionState: ActionState = ActionState.Preview;
  formInstance: FormGroup;
  readonly: boolean = false;
  constructor(public dialogRef: MatDialogRef<PersonManagementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
    this.formInstance = new FormGroup({
      "id":  new FormControl('', Validators.required),
      "productName": new FormControl('', Validators.required),
      "price": new FormControl('', Validators.required),
      "type": new FormControl('', Validators.required),
    });
    this.actionState = data.action

    if(this.actionState !== ActionState.Add) {
      this.formInstance.setValue(data.source);
    }

    if(this.actionState === ActionState.Preview) {
      this.readonly = true;
    }
  }

  ngOnInit(): void {

  }

  save(): void {
    this.dialogRef.close(Object.assign(new Person(), this.formInstance.value));
  }

}
