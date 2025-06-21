import { Component, input } from '@angular/core';

export interface TestData {
  id: number;
  name: string;
  description: string;
}

function helper() {
  console.log('test-shared-component helper function');
}

@Component({
  selector: 'app-test-shared-component',
  imports: [],
  templateUrl: './test-shared-component.html',
  styleUrl: './test-shared-component.scss',
})
export class TestSharedComponent {
  testData = input<TestData[]>();

  callHelper() {
    helper();
  }
}
