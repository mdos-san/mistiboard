import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CatCreationFormComponent } from "../cat-creation-form/cat-creation-form.component";
import { Action } from "../../shared/action-sidebar/action-sidebar.component";

@Component({
  selector: "app-cats-page",
  templateUrl: "./cats-page.component.html",
  styleUrl: "./cats-page.component.css",
})
export class CatsPageComponent {
  actionList: Action[] = [
    { label: "Ajouter un chat", handler: this.openDialog.bind(this) },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(CatCreationFormComponent);
  }
}
