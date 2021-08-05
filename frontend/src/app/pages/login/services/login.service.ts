import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private auth: AngularFireAuth, private fs: AngularFirestore) {}

  singIn(user: User) {
    return this.auth.signInWithEmailAndPassword(user.email!, user.password!);
  }

  async signUp(user: User) {
    const result = {
      error: false,
      data: {},
    };
    try {
      const response = await this.auth.createUserWithEmailAndPassword(
        user.email!,
        user.password!
      );
      user.id = response.user?.uid;
      await this.fs.collection('users').doc(user.id).set(user);
      return result;
    } catch (error) {
      result.error = true;
      result.data = error;
      return result;
    }
  }
}
