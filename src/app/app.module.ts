import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";


import { provideFirebaseApp, getApp, initializeApp,  } from '@angular/fire/app';
import { getFirestore, provideFirestore, connectFirestoreEmulator, enableIndexedDbPersistence } from '@angular/fire/firestore';
import { getFunctions, provideFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { getAuth, provideAuth, connectAuthEmulator } from '@angular/fire/auth';
import { getStorage, provideStorage, connectStorageEmulator } from '@angular/fire/storage';
import {} from '@angular/fire/auth/auth.module'



import { list } from '@angular/fire/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/components/auth/auth.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => {
        const firestore = getFirestore();
        connectFirestoreEmulator(firestore, 'localhost', 8080);
        enableIndexedDbPersistence(firestore);
        return firestore;
    }),
    provideAuth(() =>  getAuth()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
