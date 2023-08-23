import { TestBed } from '@angular/core/testing';

import { TecladosService } from './teclados.service';

describe('TecladosService', () => {
  let service: TecladosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecladosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
