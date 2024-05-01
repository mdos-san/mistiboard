import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Cat } from "@mistiboard/core/build/entities/cat";
import { CoreService } from "../../core/core.service";

@Component({
  selector: "cat-table",
  templateUrl: "./cat-table.component.html",
  styleUrl: "./cat-table.component.css",
})
export class CatTableComponent {
  cats: Cat[] = [];
  subscription: Subscription | null = null;

  constructor(private core: CoreService) {}

  ngOnInit() {
    // Manage current state
    this.cats = this.catsCollectionToArray(
      this.core.core.databaseCat.getEntities(),
    );

    // Get updates
    this.subscription = this.core.core.databaseCat
      .getEntitiesSubject()
      .subscribe((cats) => (this.cats = this.catsCollectionToArray(cats)));
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private catsCollectionToArray(cats: Map<Cat["id"], Cat>) {
    return Array.from(cats, ([_, value]) => value);
  }
}
