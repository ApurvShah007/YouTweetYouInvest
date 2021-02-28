import { TestBed } from '@angular/core/testing';

import { RedditDataService } from './reddit-data.service';

describe('RedditDataService', () => {
  let service: RedditDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedditDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
