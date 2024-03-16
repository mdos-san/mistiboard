import { Injectable } from "@angular/core";
import { Authentification } from "./authentification";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FakeAuthentificationService implements Authentification {
  private isAuth = false;
  private isAuthSubject = new Subject<boolean>();

  constructor() {}

  public getIsAuth() {
    return this.isAuth;
  }

  public subscribeIsAuth() {
    console.log("subscribeIsAuth", this.isAuthSubject);
    return this.isAuthSubject;
  }

  public signInWithEmailAndPassword(_username: string, _password: string) {
    this._updateIsAuth(true);
  }

  public signOut() {
    this._updateIsAuth(false);
  }

  _updateIsAuth(newValue: boolean) {
    console.log("_updateIsAuth", newValue);
    this.isAuth = newValue;
    this.isAuthSubject.next(newValue);
  }
}
