import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginPageComponent } from './pages/loginPage/loginPage.component';
import { RegisterPageComponent } from './pages/registerPage/registerPage.component';
import { AuthLayoutComponent } from './layouts/authLayout/authLayout.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
