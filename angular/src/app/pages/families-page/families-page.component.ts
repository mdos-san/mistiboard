import { Component } from "@angular/core";
import { CoreService } from "../../core/core.service";

@Component({
  selector: "families-page",
  templateUrl: "./families-page.component.html",
  styleUrl: "./families-page.component.css",
})
export class FamiliesPageComponent {
  constructor(public core: CoreService) {}
}
