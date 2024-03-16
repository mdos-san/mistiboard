import { Component } from "@angular/core";
import { Authentification } from "./authentification";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "mistiboard";

  constructor(public authentification: Authentification) {}
}
