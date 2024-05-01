import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CatCreationFormComponent } from "../cat-creation-form/cat-creation-form.component";

@Component({
  selector: "cat-add-button",
  templateUrl: "./cat-add-button.component.html",
})
export class CatAddButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(CatCreationFormComponent);
  }
}
