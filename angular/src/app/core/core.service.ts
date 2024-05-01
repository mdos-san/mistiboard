import { Injectable } from "@angular/core";
import { Core } from "@mistiboard/core/build/index";

@Injectable({
  providedIn: "root",
})
export class CoreService {
  public core: Core;

  constructor() {
    this.core = new Core();
  }
}
