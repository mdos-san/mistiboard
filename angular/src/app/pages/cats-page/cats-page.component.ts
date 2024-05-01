import { Component } from "@angular/core";
import { CoreService } from "../../core/core.service";

@Component({
  selector: "cats-page",
  templateUrl: "./cats-page.component.html",
  styleUrl: "./cats-page.component.css",
})
export class CatsPageComponent {
  constructor(public core: CoreService) {}
}
