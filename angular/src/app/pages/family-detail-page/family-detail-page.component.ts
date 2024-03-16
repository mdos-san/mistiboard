import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Database, DatabaseFamily } from "../../database";
import { Action } from "../../shared/action-sidebar/action-sidebar.component";
import { Family } from "../../entities/family";

@Component({
  selector: "family-detail-page",
  templateUrl: "./family-detail-page.component.html",
  styleUrl: "./family-detail-page.component.css",
})
export class FamilyDetailPageComponent {
  paramsSubscription: Subscription | null = null;
  familyId = "";
  family: Family | null = null;
  actionList: Action[] = [
    { label: "Sauvegarder", handler: this.save.bind(this) },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private database: DatabaseFamily,
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params) => {
      this.familyId = params["familyId"];
      // Manage current cats
      this.family = this.database.getById(this.familyId);
    });

    // Get cats updates
    this.database.getEntitiesSubject().subscribe((cats) => {
      this.family = cats.get(this.familyId) || null;
    });
  }

  ngOnDestroy() {
    this.paramsSubscription?.unsubscribe();
  }

  save() {
    if (this.family === null) {
      return;
    }

    console.log(this.family);
    this.database.upsert(this.family);
  }
}
