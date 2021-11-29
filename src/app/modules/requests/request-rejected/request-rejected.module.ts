import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRejectedRoutingModule } from './request-rejected-routing.module';
import { RequestRejectedComponent } from './request-rejected.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RequestRejectedComponent
  ],
  imports: [
    CommonModule,
    RequestRejectedRoutingModule,
    SharedModule
  ]
})
export class RequestRejectedModule { }
