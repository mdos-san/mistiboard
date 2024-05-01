import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { CoreService } from "../../core/core.service";

@Component({
  selector: "signin-page",
  templateUrl: "./signin-page.component.html",
  styleUrl: "./signin-page.component.css",
})
export class SigninPageComponent {
  signInForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(private core: CoreService) {}

  public signIn() {
    const { username, password } = this.signInForm.value;
    if (!username || !password) {
      return;
    }

    this.core.core.authentification.signInWithEmailAndPassword(
      username,
      password,
    );
  }
}
