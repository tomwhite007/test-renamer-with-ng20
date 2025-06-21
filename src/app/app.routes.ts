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
  { path: '**', redirectTo: '/home' },
];
