import { TestBed } from '@angular/core/testing';

import { RoomsServiceService } from './rooms-service.service';

describe('RoomsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomsServiceService = TestBed.get(RoomsServiceService);
    expect(service).toBeTruthy();
  });
});
