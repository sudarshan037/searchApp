import { TestBed } from '@angular/core/testing';

import { JobSearchService } from './job-search.service';

describe('JobSearchService', () => {
  let service: JobSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
