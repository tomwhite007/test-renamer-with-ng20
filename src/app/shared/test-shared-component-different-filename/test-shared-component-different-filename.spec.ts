import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSharedComponentDifferentFilename } from './test-shared-component-different-filename';

describe('TestSharedComponentDifferentFilename', () => {
  let component: TestSharedComponentDifferentFilename;
  let fixture: ComponentFixture<TestSharedComponentDifferentFilename>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSharedComponentDifferentFilename]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSharedComponentDifferentFilename);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
