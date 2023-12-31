import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPhoneCodeValidatorComponent } from './mat-phone-code-validator.component';

describe('MatPhoneCodeValidatorComponent', () => {
  let component: MatPhoneCodeValidatorComponent;
  let fixture: ComponentFixture<MatPhoneCodeValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatPhoneCodeValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatPhoneCodeValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
