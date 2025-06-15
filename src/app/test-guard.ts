import { CanActivateFn } from '@angular/router';

export const TestGuard: CanActivateFn = (route, state) => {
  return true;
};
