import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'landing', loadChildren: () => import('./features/landing/landing/landing.module').then(m => m.LandingModule) },
{ path: 'albumDetails', loadChildren: () => import('./features/album-details/album-details/album-details.module').then(m => m.AlbumDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
