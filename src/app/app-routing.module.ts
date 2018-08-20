import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent} from './users/users.component'
import { DetailsComponent} from './details/details.component'
import { PublicComponent} from './public/public.component'

const routes: Routes = [
  {
    path:'',
    component: UsersComponent
  },
  {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    path:'public',
    component: PublicComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
