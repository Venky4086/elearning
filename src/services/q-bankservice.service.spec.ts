import { TestBed } from '@angular/core/testing';

import { QBankserviceService } from './q-bankservice.service';

describe('QBankserviceService', () => {
  let service: QBankserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QBankserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
