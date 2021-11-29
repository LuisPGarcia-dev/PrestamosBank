import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AmountService {


  constructor(private firestore: AngularFirestore) { }

  getAmount() {
    return this.firestore.collection('capital').valueChanges();
  }

  updateAmount(dataAmount) {
    const documentId = "XBgYkZ7i4QiNW3eCJhU3"
    return this.firestore.collection('capital').doc(documentId).set(dataAmount);
  }
}
