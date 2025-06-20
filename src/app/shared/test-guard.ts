import { CanActivateFn } from '@angular/router';
import { TestUnrecognisedDefinition } from './test-unrecognised-definition';

export const testGuard: CanActivateFn = (route, state) => {
  const unrecognisedDefinition: TestUnrecognisedDefinition =
    'unrecognised-definition';
  return true;
};
