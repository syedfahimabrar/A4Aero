import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './comps/users/users.component';
import {AddusersComponent} from './comps/addusers/addusers.component';
import {DetailsComponent} from './comps/details/details.component';
import {EditusersComponent} from './comps/editusers/editusers.component';
const routes: Routes = [
  {
    path:'',
    component: UsersComponent
  },
  {
    path:'add',
    component: AddusersComponent
  },
  {
    path:'user/:id',
    component: DetailsComponent
  },
  {
    path:'edit/:id',
    component: EditusersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
