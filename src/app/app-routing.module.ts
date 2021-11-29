import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  routes: Routes = [
    {
      path: 'login',
      loadChildren: () => import('./modules/auth/auth-module.module').then(m => m.AuthModuleModule)
    },
    {
      path: 'loans',
      loadChildren: () => import('./modules/loans/loans.module').then(m => m.LoansModule)
    },
    {
      path: 'index',
      loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
    },
    { 
      path: 'request-approved', 
      loadChildren: () => import('./modules/requests/request-approved/request-approved.module').then(m => m.RequestApprovedModule) 
    }, 
    { 
      path: 'request-rejected', 
      loadChildren: () => import('./modules/requests/request-rejected/request-rejected.module').then(m => m.RequestRejectedModule) 
    },
    {
      path: '**',
      redirectTo: '/login'
    },
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }
  ];
}
