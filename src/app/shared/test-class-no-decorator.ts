import { testFunctionNoDecorator } from './test-function-no-decorator';

export class TestClassNoDecorator {
  testMethodNoDecorator(): string {
    return testFunctionNoDecorator();
  }
}
