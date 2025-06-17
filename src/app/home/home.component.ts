import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestValues } from '../shared/test-values';
import { TestModel } from '../shared/test.model';

@Component({
  selector: 'app-home',
  imports: [],
  template: `<p>home works!</p>`,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  test: TestModel = { testId: TestValues.HomeTestId };
}
