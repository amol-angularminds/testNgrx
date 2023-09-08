import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcomRoutingModule } from './ecom-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    EcomRoutingModule
  ]
})
export class EcomModule { }
