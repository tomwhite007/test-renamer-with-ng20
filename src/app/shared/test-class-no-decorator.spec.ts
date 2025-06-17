import { TestClassNoDecorator } from './test-class-no-decorator';

describe('TestClassNoDecorator', () => {
  it('should create an instance', () => {
    expect(new TestClassNoDecorator()).toBeTruthy();
  });
});
