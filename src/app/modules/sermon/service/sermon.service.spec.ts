import { TestBed } from '@angular/core/testing';

import { SermonService } from './sermon.service';

describe('SermonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SermonService = TestBed.get(SermonService);
    expect(service).toBeTruthy();
  });
});
