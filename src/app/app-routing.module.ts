import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterDBComponent } from './counter/counter-db/counter-db.component';

const routes: Routes = [
  {path:'',redirectTo:'counter',pathMatch:'full'},
  {path:'counter',component:CounterDBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
