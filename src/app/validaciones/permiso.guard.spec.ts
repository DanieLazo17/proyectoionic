import { TestBed } from '@angular/core/testing';

import { PermisoGuard } from './permiso.guard';

describe('PermisoGuard', () => {
  let guard: PermisoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
