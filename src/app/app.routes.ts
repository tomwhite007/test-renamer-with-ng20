import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { testGuard } from './shared/test-guard';
import { testResolver } from './shared/test-resolver';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [testGuard],
    resolve: testResolver,
  },
  { path: '**', redirectTo: '/home' },
];
