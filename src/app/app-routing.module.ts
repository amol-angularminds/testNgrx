import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterDBComponent } from './counter/counter-db/counter-db.component';
import { LandingPageComponent } from './auth/components/landing-page/landing-page.component';

const routes: Routes = [
  {path:'',redirectTo:'Property',pathMatch:'full'},
  {
    path: 'Property',
    component: LandingPageComponent
  },
  {path:'counter',component:CounterDBComponent},
  {
    path: 'ecom',
    loadChildren: ()=> import('./ecom/ecom.module').then(m => m.EcomModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
