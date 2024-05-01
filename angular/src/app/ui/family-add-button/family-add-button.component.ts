import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { FamilyCreationFormComponent } from "../family-creation-form/family-creation-form.component";

@Component({
  selector: "family-add-button",
  templateUrl: "./family-add-button.component.html",
})
export class FamilyAddButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(FamilyCreationFormComponent);
  }
}
