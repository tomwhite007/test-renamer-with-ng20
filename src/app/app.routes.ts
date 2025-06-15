import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestGuard } from './test-guard';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [TestGuard] },
  { path: '**', redirectTo: '/home' },
];
