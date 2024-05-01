import { Subject } from "rxjs";
import { Authentification } from ".";
import {
  signOut,
  signInWithEmailAndPassword,
  Auth,
  onAuthStateChanged,
} from "firebase/auth";

export class FirebaseAuthentificationService implements Authentification {
  private auth: Auth;
  private isAuth: boolean = false;
  private isAuthSubject = new Subject<boolean>();

  constructor(auth: Auth) {
    this.auth = auth;

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // ...
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }

      this.isAuthSubject.next(this.isAuth);
    });
  }

  getIsAuth() {
    return this.isAuth;
  }

  subscribeIsAuth() {
    return this.isAuthSubject;
  }

  async signInWithEmailAndPassword(username: string, password: string) {
    const user = await signInWithEmailAndPassword(
      this.auth,
      username,
      password,
    );

    if (user.user.uid) {
      this.isAuth = true;
      this.isAuthSubject.next(this.isAuth);
    }
  }

  signOut() {
    signOut(this.auth);
  }
}
