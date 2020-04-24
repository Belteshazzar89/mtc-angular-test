import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './layout/home/home.component';
import { UserListComponent } from './users/list/list.component';
import { UserRegisterComponent } from './users/register/register.component';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: UserListComponent, path: 'list' },
  { component: UserRegisterComponent, path: 'register' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
