import { TestBed } from '@angular/core/testing';

import { CounterDownService } from './counter-down.service';

describe('CounterDownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CounterDownService = TestBed.get(CounterDownService);
    expect(service).toBeTruthy();
  });
});
