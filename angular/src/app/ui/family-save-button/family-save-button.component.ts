import { Component, Input } from "@angular/core";
import { Family, FamilyFactory } from "@mistiboard/core";
import { CoreService } from "../../core/core.service";

@Component({
  selector: "family-save-button",
  templateUrl: "./family-save-button.component.html",
})
export class FamilySaveButtonComponent {
  @Input({ required: true })
  family: Family = FamilyFactory();

  constructor(public core: CoreService) {}

  save(): void {
    this.core.core.databaseFamily.upsert(this.family);
  }
}
