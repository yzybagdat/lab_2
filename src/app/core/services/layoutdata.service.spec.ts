import { TestBed } from '@angular/core/testing';

import { LayoutdataService } from './layoutdata.service';

describe('LayoutdataService', () => {
  let service: LayoutdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
