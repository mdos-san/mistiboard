import { Injectable, inject } from "@angular/core";
import { Auth, signOut, user } from "@angular/fire/auth";
import { Subject } from "rxjs";
import { signInWithEmailAndPassword } from "@angular/fire/auth";
import { Authentification } from "./authentification";

@Injectable({
  providedIn: "root",
})
export class FirebaseAuthentificationService implements Authentification {
  private auth: Auth = inject(Auth);
  private isAuth: boolean = false;
  private isAuthSubject = new Subject<boolean>();

  user$ = user(this.auth);

  getIsAuth() {
    return this.isAuth;
  }

  subscribeIsAuth() {
    return this.isAuthSubject;
  }

  signInWithEmailAndPassword(username: string, password: string) {
    return signInWithEmailAndPassword(this.auth, username, password);
  }

  signOut() {
    return signOut(this.auth);
  }
}
