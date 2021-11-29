import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestApprovedRoutingModule } from './request-approved-routing.module';
import { RequestApprovedComponent } from './request-approved.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RequestApprovedComponent
  ],
  imports: [
    CommonModule,
    RequestApprovedRoutingModule,
    SharedModule
  ]
})
export class RequestApprovedModule { }
