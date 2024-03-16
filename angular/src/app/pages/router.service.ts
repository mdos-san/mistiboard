import { Authentification } from "../authentification";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class RouterService {
  private router: Router;
  private authentification: Authentification;

  constructor(authentification: Authentification, router: Router) {
    console.log("RouterService", authentification, router);
    this.router = router;
    this.authentification = authentification;

    this.handleAuthChange(this.authentification.getIsAuth());
    this.authentification.subscribeIsAuth().subscribe((isAuth) => {
      this.handleAuthChange(isAuth);
    });
  }

  handleAuthChange(isAuth: boolean) {
    console.log("handleAuthChange", isAuth, this.router);

    if (isAuth && this.router.url === "/") {
      this.router.navigate(["/cats"]);
      return;
    }

    if (!isAuth) {
      this.router.navigate(["/"]);
      return;
    }
  }
}
