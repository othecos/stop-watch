import { TestBed } from '@angular/core/testing';

import { CounterUpService } from './counter-up.service';

describe('CounterUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CounterUpService = TestBed.get(CounterUpService);
    expect(service).toBeTruthy();
  });
});
