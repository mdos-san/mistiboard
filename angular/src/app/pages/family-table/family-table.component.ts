import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { Database, DatabaseFamily } from "../../database";
import { Family } from "../../entities/family";

@Component({
  selector: "family-table",
  templateUrl: "./family-table.component.html",
  styleUrl: "./family-table.component.css",
})
export class FamilyTableComponent {
  families: Family[] = [];
  displayedColumns: string[] = ["id", "name"];
  private subscription: Subscription | null = null;

  constructor(
    private database: DatabaseFamily,
    private router: Router,
  ) {}

  ngOnInit() {
    // Manage current state
    this.families = this.familiesCollectionToArray(this.database.getEntities());

    // Get updates
    this.subscription = this.database
      .getEntitiesSubject()
      .subscribe(
        (families) =>
          (this.families = this.familiesCollectionToArray(families)),
      );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private familiesCollectionToArray(families: Map<Family["id"], Family>) {
    return Array.from(families, ([_, value]) => value);
  }

  public goToDetail(catId: Family["id"]) {
    this.router.navigate(["/families", catId]);
  }
}
