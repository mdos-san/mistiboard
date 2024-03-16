import { AdministrationPageComponent } from "./administration-page/administration-page.component";
import { AuthentificationModule } from "../authentification";
import { CatCreationFormComponent } from "./cat-creation-form/cat-creation-form.component";
import { CatDetailPageComponent } from "./cat-detail-page/cat-detail-page.component";
import { CatTableComponent } from "./cat-table/cat-table.component";
import { CatsPageComponent } from "./cats-page/cats-page.component";
import { CommonModule } from "@angular/common";
import { FamiliesPageComponent } from "./families-page/families-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatTableModule } from "@angular/material/table";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { RouterModule } from "@angular/router";
import { RouterService } from "./router.service";
import { SigninPageComponent } from "./signin-page/signin-page.component";
import { routes } from "./pages.routes";
import { DatabaseModule } from "../database/database.module";
import { SharedModule } from "../shared/shared.module";
import { FamilyTableComponent } from "./family-table/family-table.component";
import { FamilyDetailPageComponent } from "./family-detail-page/family-detail-page.component";
import { FamilyCreationFormComponent } from "./family-creation-form/family-creation-form.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AuthentificationModule,
    DatabaseModule,
    SharedModule,
  ],
  declarations: [
    AdministrationPageComponent,
    CatCreationFormComponent,
    CatDetailPageComponent,
    CatTableComponent,
    CatsPageComponent,
    FamilyTableComponent,
    FamilyDetailPageComponent,
    FamilyCreationFormComponent,
    FamiliesPageComponent,
    PagesComponent,
    SigninPageComponent,
  ],
  exports: [PagesComponent],
  providers: [MatDatepickerModule, MatNativeDateModule, RouterService],
})
export class PagesModule {}
