import { ActivatedRoute } from "@angular/router";
import { Cat, CatFactory } from "@mistiboard/core/build/entities/cat";
import { Component } from "@angular/core";
import { CoreService } from "../../core/core.service";
import { Subscription } from "rxjs";
import { Family } from "@mistiboard/core";

@Component({
  selector: "cat-detail-page",
  templateUrl: "./cat-detail-page.component.html",
  styleUrl: "./cat-detail-page.component.css",
})
export class CatDetailPageComponent {
  paramsSubscription: Subscription | null = null;
  catId = "";
  fileUploadUrl = "";
  value = "Hello";
  cat: Cat = CatFactory();
  catPictureUrl = "";
  families: Family[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public core: CoreService,
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params) => {
      this.catId = params["catId"];
      this.fileUploadUrl = `${this.catId}/picture`;

      // Manage current cats
      this.cat = this.core.core.databaseCat.getById(this.catId) ?? CatFactory();

      if (this.cat.hasPicture) {
        this.core.core.storage
          .getDownloadUrl(this.fileUploadUrl)
          .then((url) => {
            this.catPictureUrl = url;
          });
      }
    });

    // Get cats updates
    this.core.core.databaseCat.getEntitiesSubject().subscribe((cats) => {
      this.cat = cats.get(this.catId) ?? CatFactory();
    });

    this.families = this.core.core.databaseFamily.getEntitiesAsArray();
  }

  ngOnDestroy() {
    this.paramsSubscription?.unsubscribe();
  }

  convertAndAssignBirthday(newDate: Date) {
    if (!newDate || !this.cat) {
      // TODO: error management
      return;
    }

    this.cat.birthday = newDate.toISOString();
  }
}
