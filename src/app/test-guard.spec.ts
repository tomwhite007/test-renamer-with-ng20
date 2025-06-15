import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { TestGuard } from './test-guard';

describe('TestGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => TestGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
