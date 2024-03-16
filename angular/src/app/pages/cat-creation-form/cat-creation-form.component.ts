import { Cat, CatFactory } from "../../entities/cat";
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { v4 } from "uuid";
import { DatabaseCat } from "../../database";

@Component({
  selector: "app-cat-creation-form",
  templateUrl: "./cat-creation-form.component.html",
  styleUrl: "./cat-creation-form.component.css",
})
export class CatCreationFormComponent {
  catCreationForm = this.formBuilder.group({
    name: [""],
  });

  constructor(
    private database: DatabaseCat,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  submitCreationForm() {
    const { name } = this.catCreationForm.value;
    if (!name) {
      // TODO: error
      return;
    }

    const cat: Cat = CatFactory();
    cat.id = v4();
    cat.name = name;
    this.database.upsert(cat);
    this.dialog.closeAll();
    this.router.navigate(["cats", cat.id]);
  }
}
