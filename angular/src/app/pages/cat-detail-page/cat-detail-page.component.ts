import { ActivatedRoute } from "@angular/router";
import { Cat } from "../../entities/cat";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { DatabaseCat } from "../../database";
import { Action } from "../../shared/action-sidebar/action-sidebar.component";

@Component({
  selector: "app-cat-detail-page",
  templateUrl: "./cat-detail-page.component.html",
  styleUrl: "./cat-detail-page.component.css",
})
export class CatDetailPageComponent {
  paramsSubscription: Subscription | null = null;
  catId = "";
  value = "Hello";
  cat: Cat | null = null;
  actionList: Action[] = [
    { label: "Sauvegarder", handler: this.save.bind(this) },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private database: DatabaseCat,
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params) => {
      this.catId = params["catId"];
      // Manage current cats
      this.cat = this.database.getById(this.catId);
    });

    // Get cats updates
    this.database.getEntitiesSubject().subscribe((cats) => {
      this.cat = cats.get(this.catId) || null;
    });
  }

  ngOnDestroy() {
    this.paramsSubscription?.unsubscribe();
  }

  save() {
    if (this.cat === null) {
      return;
    }

    console.log(this.cat);
    this.database.upsert(this.cat);
  }

  convertAndAssignBirthday(newDate: Date) {
    if (!newDate || !this.cat) {
      // TODO: error management
      return;
    }

    this.cat.birthday = newDate.toISOString();
  }
}
