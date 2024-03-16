import { Component } from "@angular/core";
import { Action } from "../../shared/action-sidebar/action-sidebar.component";
import { FamilyCreationFormComponent } from "../family-creation-form/family-creation-form.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "families-page",
  templateUrl: "./families-page.component.html",
  styleUrl: "./families-page.component.css",
})
export class FamiliesPageComponent {
  actionList: Action[] = [
    { label: "Ajouter une famille", handler: this.openDialog.bind(this) },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(FamilyCreationFormComponent);
  }
}
