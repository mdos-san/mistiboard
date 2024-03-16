import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FakeAuthentificationService } from "./fake-authentification.service";
import { Authentification } from "./authentification";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: Authentification, useClass: FakeAuthentificationService },
  ],
})
export class AuthentificationModule {}
