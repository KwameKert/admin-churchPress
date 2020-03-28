import { TestBed } from '@angular/core/testing';

import { SermonServiceService } from './sermon-service.service';

describe('SermonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SermonServiceService = TestBed.get(SermonServiceService);
    expect(service).toBeTruthy();
  });
});
