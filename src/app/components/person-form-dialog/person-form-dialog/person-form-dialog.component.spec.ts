import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormDialogComponent } from './person-form-dialog.component';

describe('PersonFormDialogComponent', () => {
  let component: PersonFormDialogComponent;
  let fixture: ComponentFixture<PersonFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonFormDialogComponent]
    });
    fixture = TestBed.createComponent(PersonFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
