import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Authentification } from "../../authentification";

@Component({
  selector: "app-signin-page",
  templateUrl: "./signin-page.component.html",
  styleUrl: "./signin-page.component.css",
})
export class SigninPageComponent {
  signInForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(private authentification: Authentification) {}

  public signIn() {
    const { username, password } = this.signInForm.value;
    if (!username || !password) {
      return;
    }

    this.authentification.signInWithEmailAndPassword(username, password);
  }
}
