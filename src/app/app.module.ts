import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AuthComponent } from './modules/auth/auth-component/auth.component';
import { ModalRegisterComponent } from './shared/components/modal-register/modal-register.component';

import { environment } from '../environments/environment';
import { AuthModuleModule } from './modules/auth/auth-module.module';
import { LoansModule } from './modules/loans/loans.module';
import { MainModule } from './modules/main/main.module';
import { RequestApprovedModule } from './modules/requests/request-approved/request-approved.module';
import { RequestRejectedModule } from './modules/requests/request-rejected/request-rejected.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ModalRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule,
    AuthModuleModule,
    LoansModule,
    MainModule,
    RequestApprovedModule,
    RequestRejectedModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [ModalRegisterComponent],
  providers: [
    // ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
