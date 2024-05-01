import { Component, Input } from "@angular/core";
import { CoreService } from "../../core/core.service";
import { Cat, CatFactory } from "@mistiboard/core";

@Component({
  selector: "cat-save-button",
  templateUrl: "./cat-save-button.component.html",
})
export class CatSaveButtonComponent {
  @Input({ required: true })
  cat: Cat = CatFactory();

  constructor(public core: CoreService) {}

  save(): void {
    this.core.core.databaseCat.upsert(this.cat);
  }
}
