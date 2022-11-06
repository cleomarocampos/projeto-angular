import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarFormComponent } from './carts/car-form/car-form.component';
import { CarTrashComponent } from './carts/car-trash/car-trash.component';
import { CarsComponent } from './carts/cars.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserTrashComponent } from './users/user-trash/user-trash.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent, },
  { path: 'users', component: UsersComponent, },
  { path: 'users/trash', component: UserTrashComponent, },
  { path: 'users/create', component: UserFormComponent, },
  { path: 'users/edit/:id', component: UserFormComponent, },

  { path: 'cars', component: CarsComponent, },
  { path: 'cars/trash', component: CarTrashComponent, },
  { path: 'cars/create', component: CarFormComponent, },
  { path: 'cars/edit/:id', component: CarFormComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
