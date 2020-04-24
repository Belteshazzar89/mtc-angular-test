import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private myFirestore: AngularFirestore) {}

  postUser(user: User): Promise<DocumentReference> {
    // Convert the timestamp to a date
    user.birthTimeStamp = firestore.Timestamp.fromDate(user.birthDate);
    delete user.birthDate;

    return this.myFirestore.collection('users').add(user);
  }

  getUsers(): Observable<User[]> {
    return this.myFirestore
      .collection<User>('users')
      .valueChanges()
      .pipe(
        map((users) => {
          users.forEach((user: User) => {
            // Firestore stores a timestamp format that should be converted to a Date
            user.birthDate = user.birthTimeStamp.toDate();
          });
          return users;
        })
      );
  }
}
