import { CarRepository } from './repository/car.repository';
import { CarService } from './services/car.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { InterceptorModule } from './interceptors/interceptor.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CarsComponent } from './carts/cars.component';
import { UserService } from './services/user.service';
import { UserRepository } from './repository/user.repository';
import { UserFormComponent } from './users/user-form/user-form.component';
import { CarFormComponent } from './carts/car-form/car-form.component';
import { CarTrashComponent } from './carts/car-trash/car-trash.component';
import { UserTrashComponent } from './users/user-trash/user-trash.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CarsComponent,
    UserFormComponent,
    CarFormComponent,
    CarTrashComponent,
    UserTrashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InterceptorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService, UserRepository,
    CarService, CarRepository,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
