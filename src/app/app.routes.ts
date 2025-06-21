import { Routes } from '@angular/router';
import { Home } from './home/home';
import { testGuard } from './shared/test-guard';
import { testResolver } from './shared/test-resolver';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: Home,
    canActivate: [testGuard],
    resolve: testResolver,
  },
  {
    path: 'test',
    loadComponent: () =>
      import('./shared/test-shared-component/test-shared-component').then(
        (m) => m.TestSharedComponent
      ),
  },
  {
    path: 'test-different-filename',
    loadComponent: () =>
      import(
        './shared/test-shared-component-different-filename/test-shared-component-different-filename'
      ).then((m) => m.TestSharedComponentDifferent),
  },
  { path: '**', redirectTo: '/home' },
];
