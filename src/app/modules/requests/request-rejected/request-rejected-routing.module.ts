import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestRejectedComponent } from './request-rejected.component';

const routes: Routes = [{ path: 'solicitudes/rechazada', component: RequestRejectedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRejectedRoutingModule { }
