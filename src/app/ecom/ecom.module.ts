import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcomRoutingModule } from './ecom-routing.module';
import { EcomComponent } from './ecom.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


@NgModule({
  declarations: [
    EcomComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    EcomRoutingModule
  ]
})
export class EcomModule { }
