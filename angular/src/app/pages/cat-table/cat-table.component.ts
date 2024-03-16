import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { Cat } from "../../entities/cat";
import { DatabaseCat } from "../../database";

@Component({
  selector: "app-cat-table",
  templateUrl: "./cat-table.component.html",
  styleUrl: "./cat-table.component.css",
})
export class CatTableComponent {
  cats: Cat[] = [];
  displayedColumns: string[] = ["id", "name"];
  private subscription: Subscription | null = null;

  constructor(
    private database: DatabaseCat,
    private router: Router,
  ) {}

  ngOnInit() {
    // Manage current state
    this.cats = this.catsCollectionToArray(this.database.getEntities());

    // Get updates
    this.subscription = this.database
      .getEntitiesSubject()
      .subscribe((cats) => (this.cats = this.catsCollectionToArray(cats)));
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private catsCollectionToArray(cats: Map<Cat["id"], Cat>) {
    return Array.from(cats, ([_, value]) => value);
  }

  public goToDetail(catId: Cat["id"]) {
    this.router.navigate(["/cats", catId]);
  }
}
