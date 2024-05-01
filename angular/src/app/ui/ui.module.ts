import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatTableModule } from "@angular/material/table";
import { NgModule } from "@angular/core";

import { CatAddButtonComponent } from "./cat-add-button/cat-add-button.component";
import { CatCreationFormComponent } from "./cat-creation-form/cat-creation-form.component";
import { CatPreviewCardComponent } from "./cat-preview-card/cat-preview-card.component";
import { CatSaveButtonComponent } from "./cat-save-button/cat-save-button.component";
import { CatTableComponent } from "./cat-table/cat-table.component";
import { CoreModule } from "../core/core.module";
import { FamilyAddButtonComponent } from "./family-add-button/family-add-button.component";
import { FamilyCardComponent } from "./family-card/family-card.component";
import { FamilyCreationFormComponent } from "./family-creation-form/family-creation-form.component";
import { FamilyListComponent } from "./family-list/family-list.component";
import { FamilySaveButtonComponent } from "./family-save-button/family-save-button.component";
import { FileInputComponent } from "./file-input/file-input.component";

@NgModule({
  declarations: [
    CatAddButtonComponent,
    CatCreationFormComponent,
    CatPreviewCardComponent,
    CatSaveButtonComponent,
    CatTableComponent,
    FamilyAddButtonComponent,
    FamilyCardComponent,
    FamilyCreationFormComponent,
    FamilyListComponent,
    FamilySaveButtonComponent,
    FileInputComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    MatButtonModule,
    MatButtonModule,
    MatCardModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  exports: [
    CatAddButtonComponent,
    CatCreationFormComponent,
    CatPreviewCardComponent,
    CatSaveButtonComponent,
    CatTableComponent,
    FamilyAddButtonComponent,
    FamilyCardComponent,
    FamilyCreationFormComponent,
    FamilyListComponent,
    FamilySaveButtonComponent,
    FileInputComponent,
  ],
})
export class UiModule {}
