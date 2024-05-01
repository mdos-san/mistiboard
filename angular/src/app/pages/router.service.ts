import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CoreService } from "../core/core.service";

@Injectable()
export class RouterService {
  private router: Router;

  constructor(
    public core: CoreService,
    router: Router,
  ) {
    this.router = router;
    this.core = core;

    this.handleAuthChange(this.core.core.authentification.getIsAuth());
    this.core.core.authentification.subscribeIsAuth().subscribe((isAuth) => {
      this.handleAuthChange(isAuth);
    });
  }

  handleAuthChange(isAuth: boolean) {
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
