import { TestBed } from '@angular/core/testing';

import { IonicUtilsService } from './ionic-utils.service';

describe('IonicUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IonicUtilsService = TestBed.get(IonicUtilsService);
    expect(service).toBeTruthy();
  });
});
