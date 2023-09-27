import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NonLoggedinLayoutComponent } from './components/non-loggedin-layout/non-loggedin-layout.component';
import { LoggedinLayoutComponent } from './components/loggedin-layout/loggedin-layout.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NonLoggedinLayoutComponent,
    LoggedinLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports : [
    NavbarComponent,
    FooterComponent,
    NonLoggedinLayoutComponent,
    LoggedinLayoutComponent
  ]
})
export class SharedModule { }
