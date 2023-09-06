import { TestBed } from '@angular/core/testing';

import { MatPhoneCodeValidatorService } from './mat-phone-code-validator.service';

describe('MatPhoneCodeValidatorService', () => {
  let service: MatPhoneCodeValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatPhoneCodeValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
