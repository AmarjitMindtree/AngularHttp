import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { AuthGuard } from '../shared/auth/auth.guard';

const routes: Routes = [
  { path: 'UserHome', component: UserHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
