import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TestClassNoDecorator } from '../shared/test-class-no-decorator';
import { TestValues } from '../shared/test-values';
import { TestModel } from '../shared/test.model';

@Component({
  selector: 'app-home',
  imports: [],
  template: `<p>home works!</p>`,
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit {
  test: TestModel = { testId: TestValues.HomeTestId };
  testClass: TestClassNoDecorator = new TestClassNoDecorator();

  ngOnInit(): void {
    console.log(this.testClass.testMethodNoDecorator());
  }
}
