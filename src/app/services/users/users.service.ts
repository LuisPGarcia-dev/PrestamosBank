import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: AngularFirestore) { }



  createUsers(data) {
    return this.firestore.collection('usuarios').add(data);
  }

  getUsers() {
    return this.firestore.collection('usuarios').valueChanges();
  }
}
