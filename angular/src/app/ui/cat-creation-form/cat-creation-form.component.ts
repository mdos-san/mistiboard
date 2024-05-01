import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { v4 } from "uuid";
import { CoreService } from "../../core/core.service";
import { Cat, CatFactory } from "@mistiboard/core/build/entities/cat";

@Component({
  selector: "cat-creation-form",
  templateUrl: "./cat-creation-form.component.html",
  styleUrl: "./cat-creation-form.component.css",
})
export class CatCreationFormComponent {
  catCreationForm = this.formBuilder.group({
    name: [""],
  });

  constructor(
    private core: CoreService,
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
    this.core.core.databaseCat.upsert(cat);
    this.dialog.closeAll();
    this.router.navigate(["cats", cat.id]);
  }
}
