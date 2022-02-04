import { TestBed } from '@angular/core/testing';

import { ServicejsonService } from './servicejson.service';

describe('ServicejsonService', () => {
  let service: ServicejsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicejsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
