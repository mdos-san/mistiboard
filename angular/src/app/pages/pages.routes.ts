import { Routes } from "@angular/router";
import { CatsPageComponent } from "./cats-page/cats-page.component";
import { FamiliesPageComponent } from "./families-page/families-page.component";
import { SigninPageComponent } from "./signin-page/signin-page.component";
import { CatDetailPageComponent } from "./cat-detail-page/cat-detail-page.component";
import { FamilyDetailPageComponent } from "./family-detail-page/family-detail-page.component";

export const routes: Routes = [
  { path: "cats", component: CatsPageComponent },
  { path: "cats/:catId", component: CatDetailPageComponent },
  { path: "families", component: FamiliesPageComponent },
  { path: "families/:familyId", component: FamilyDetailPageComponent },
  { path: "**", component: SigninPageComponent },
];
