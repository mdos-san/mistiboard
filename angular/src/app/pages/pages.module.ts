import { CatDetailPageComponent } from "./cat-detail-page/cat-detail-page.component";
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
import { SharedModule } from "../shared/shared.module";
import { FamilyDetailPageComponent } from "./family-detail-page/family-detail-page.component";
import { UiModule } from "../ui/ui.module";
import { LayoutModule } from "../layout/layout.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    FormsModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    LayoutModule,
    MatToolbarModule,
    UiModule,
  ],
  declarations: [
    CatDetailPageComponent,
    CatsPageComponent,
    FamilyDetailPageComponent,
    FamiliesPageComponent,
    PagesComponent,
    SigninPageComponent,
  ],
  exports: [PagesComponent],
  providers: [MatDatepickerModule, MatNativeDateModule, RouterService],
})
export class PagesModule {}
