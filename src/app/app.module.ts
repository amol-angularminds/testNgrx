import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterDBComponent } from './counter/counter-db/counter-db.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CounterResultComponent } from './counter/counter-result/counter-result.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counterStore/counter.reducer';
import { CustdataInputComponent } from './counter/custdata-input/custdata-input.component';
import { LandingPageComponent } from './auth/components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterDBComponent,
    CounterButtonComponent,
    CounterResultComponent,
    CustdataInputComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
