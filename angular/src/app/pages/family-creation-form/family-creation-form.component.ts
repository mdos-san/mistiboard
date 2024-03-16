import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { v4 } from "uuid";
import { Database, DatabaseFamily } from "../../database";
import { Family, FamilyFactory } from "../../entities/family";

@Component({
  selector: "family-creation-form",
  templateUrl: "./family-creation-form.component.html",
  styleUrl: "./family-creation-form.component.css",
})
export class FamilyCreationFormComponent {
  familyCreationForm = this.formBuilder.group({
    name: [""],
  });

  constructor(
    private database: DatabaseFamily,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  submitCreationForm() {
    const { name } = this.familyCreationForm.value;
    if (!name) {
      // TODO: error
      return;
    }

    const family = FamilyFactory();
    family.id = v4();
    family.name = name;
    this.database.upsert(family);
    this.dialog.closeAll();
    this.router.navigate(["families", family.id]);
  }
}
