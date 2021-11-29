import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private firestore: AngularFirestore) { 

  }
  
  getRequestsRejecteds() {
    return this.firestore.collection('solicitudes_rechazadas').valueChanges();
  }

  getRequestsApproved() {
    return this.firestore.collection('solicitudes_aprobadas').valueChanges();
  }
  
}
