import { TestBed } from '@angular/core/testing';

import { GroupdiscussionService } from './groupdiscussion.service';

describe('GroupdiscussionService', () => {
  let service: GroupdiscussionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupdiscussionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
