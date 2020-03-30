import { TestBed } from '@angular/core/testing';

import { DeleteService } from './delete.service';

describe('DeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteService = TestBed.get(DeleteService);
    expect(service).toBeTruthy();
  });
});
