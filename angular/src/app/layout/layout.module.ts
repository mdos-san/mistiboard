import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PageWithHeaderContentActionComponent } from "./page-with-header-content-action/page-with-header-content-action.component";
import { CoreModule } from "../core/core.module";
import { DetailPageComponent } from "./detail-page/detail-page.component";

@NgModule({
  declarations: [PageWithHeaderContentActionComponent, DetailPageComponent],
  imports: [CommonModule, MatToolbarModule, CoreModule],
  exports: [PageWithHeaderContentActionComponent, DetailPageComponent],
})
export class LayoutModule {}
