import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestApprovedComponent } from './request-approved.component';

const routes: Routes = [{ path: 'solicitudes/aprobada', component: RequestApprovedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestApprovedRoutingModule { }
