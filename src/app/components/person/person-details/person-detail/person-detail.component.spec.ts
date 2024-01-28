import { PersonDetailsComponent } from './person-detail.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';


describe('PersonDetailsComponent', () => {
  let component: PersonDetailsComponent;
  let fixture: ComponentFixture<PersonDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonDetailsComponent]
    });
    fixture = TestBed.createComponent(PersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function expect(Component: PersonDetailsComponent) {
  throw new Error('Function not implemented.');
}

function beforeEach(arg0: () => void) {
  throw new Error('Function not implemented.');
}

