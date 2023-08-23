import { TestBed } from '@angular/core/testing';

import { MousePadService } from './mouse-pad.service';

describe('MousePadService', () => {
  let service: MousePadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MousePadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
