import { TestBed } from '@angular/core/testing';

import { MasterService } from '../Share/master.service';

describe('MasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterService = TestBed.get(MasterService);
    expect(service).toBeTruthy();
  });
});
