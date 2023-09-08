import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonLoggedinLayoutComponent } from './shared/components/non-loggedin-layout/non-loggedin-layout.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {
    path: '',
    component: NonLoggedinLayoutComponent,
    children : [
      {
        path: '',
        redirectTo : 'Auth',
        pathMatch: 'full'
      },
      {
        path: 'Auth',
        loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'Auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcomRoutingModule { }
