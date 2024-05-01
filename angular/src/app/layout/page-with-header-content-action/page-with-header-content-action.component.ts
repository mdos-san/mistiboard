import { Component } from "@angular/core";
import { CoreService } from "../../core/core.service";

@Component({
  selector: "page-with-header-content-action",
  templateUrl: "./page-with-header-content-action.component.html",
  styleUrl: "./page-with-header-content-action.component.css",
})
export class PageWithHeaderContentActionComponent {
  constructor(public core: CoreService) {}
}
