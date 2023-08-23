import { TestBed } from '@angular/core/testing';

import { HeadSetService } from './head-set.service';

describe('HeadSetService', () => {
  let service: HeadSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
