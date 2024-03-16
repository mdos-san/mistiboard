import { Component } from "@angular/core";
import { RouterService } from "./router.service";

@Component({
  selector: "pages",
  templateUrl: "./pages.component.html",
  styleUrl: "./pages.component.css",
})
export class PagesComponent {
  constructor(private _routerService: RouterService) {}
}
