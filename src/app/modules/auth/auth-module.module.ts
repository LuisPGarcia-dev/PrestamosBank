import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from '../../app-routing.module';

import { AuthComponent } from '../../modules/auth/auth-component/auth.component';
import { ModalRegisterComponent } from 'src/app/shared/components/modal-register/modal-register.component';
import { AuthRoutingModule } from './auth-component/auth-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AuthRoutingModule
],
entryComponents:[
    ModalRegisterComponent
  ],
schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
declarations: [

],
bootstrap: [AuthComponent]
})

export class AuthModuleModule { }
