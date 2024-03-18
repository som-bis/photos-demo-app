import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { LogoutComponent } from './core/logout/logout/logout.component';
import { AuthGuard } from './shared/services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'landing',
    loadChildren: () =>
      import('./features/landing/landing/landing.module').then(
        (m) => m.LandingModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'albumDetails',
    loadChildren: () =>
      import('./features/album-details/album-details/album-details.module').then(
        (m) => m.AlbumDetailsModule
      ),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
