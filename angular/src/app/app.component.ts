import { Component } from "@angular/core";
import { CoreService } from "./core/core.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "mistiboard";

  constructor(public core: CoreService) {}
}
