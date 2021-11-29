import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoansModule } from '../loans/loans.module';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AmountComponent } from 'src/app/shared/components/amount/amount.component';




@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    LoansModule,
    SharedModule
  ],
  entryComponents:[
    NavbarComponent,
    AmountComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }
