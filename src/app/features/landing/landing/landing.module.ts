import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatCardModule
  ]
})
export class AppModule { }



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatCardModule
  ]
})
export class LandingModule { }
