import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Family, FamilyFactory } from "@mistiboard/core/build/entities/family";
import { CoreService } from "../../core/core.service";
import { Cat } from "@mistiboard/core";

@Component({
  selector: "family-detail-page",
  templateUrl: "./family-detail-page.component.html",
  styleUrl: "./family-detail-page.component.css",
})
export class FamilyDetailPageComponent {
  paramsSubscription: Subscription | null = null;
  familyId = "";
  family: Family = FamilyFactory();
  cats: Cat[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public core: CoreService,
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params) => {
      this.familyId = params["familyId"];
      // Manage current cats
      this.family =
        this.core.core.databaseFamily.getById(this.familyId) ?? FamilyFactory();
    });

    // Get cats updates
    this.core.core.databaseFamily.getEntitiesSubject().subscribe((cats) => {
      this.family = cats.get(this.familyId) ?? FamilyFactory();
    });

    this.cats = this.core.core.databaseCat
      .getEntitiesAsArray()
      .filter((c) => c.familyId === this.familyId);
  }

  ngOnDestroy() {
    this.paramsSubscription?.unsubscribe();
  }

  save() {
    if (this.family === null) {
      return;
    }

    this.core.core.databaseFamily.upsert(this.family);
  }
}
