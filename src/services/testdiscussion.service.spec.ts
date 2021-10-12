import { TestBed } from '@angular/core/testing';

import { TestdiscussionService } from './testdiscussion.service';

describe('TestdiscussionService', () => {
  let service: TestdiscussionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestdiscussionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
