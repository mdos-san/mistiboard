import { Component } from "@angular/core";
import { Family } from "@mistiboard/core";
import { Subscription } from "rxjs";
import { CoreService } from "../../core/core.service";
import { Router } from "@angular/router";

@Component({
  selector: "family-list",
  templateUrl: "./family-list.component.html",
  styleUrl: "./family-list.component.css",
})
export class FamilyListComponent {
  families: Family[] = [];
  private subscription: Subscription | null = null;

  constructor(
    private core: CoreService,
    private router: Router,
  ) {}

  ngOnInit() {
    // Manage current state
    this.families = this.familiesCollectionToArray(
      this.core.core.databaseFamily.getEntities(),
    );

    // Get updates
    this.subscription = this.core.core.databaseFamily
      .getEntitiesSubject()
      .subscribe(
        (cats) => (this.families = this.familiesCollectionToArray(cats)),
      );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private familiesCollectionToArray(cats: Map<Family["id"], Family>) {
    return Array.from(cats, ([_, value]) => value);
  }

  public goToDetail(familyId: Family["id"]) {
    this.router.navigate(["/families", familyId]);
  }
}
