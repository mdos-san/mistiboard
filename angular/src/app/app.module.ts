import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PagesModule } from "./pages/pages.module";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { provideAnimations } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    PagesModule,
    RouterModule.forRoot(routes),
    CoreModule,
  ],
  providers: [provideAnimations()],
})
export class AppModule {}
