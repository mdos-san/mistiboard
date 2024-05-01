import { Component, Input } from "@angular/core";
import { Cat, CatFactory } from "@mistiboard/core";
import { CoreService } from "../../core/core.service";
import { Router } from "@angular/router";

@Component({
  selector: "cat-preview-card",
  templateUrl: "./cat-preview-card.component.html",
  styleUrl: "./cat-preview-card.component.css",
})
export class CatPreviewCardComponent {
  _cat: Cat = CatFactory();
  _imageUrl = "/assets/Mistigris-logo-sansCB.small.png";

  @Input({ required: true }) set cat(value: Cat) {
    this._cat = value;
  }

  constructor(
    public core: CoreService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this._cat.hasPicture) {
      this.core.core.storage
        .getDownloadUrl(`${this._cat.id}/picture`)
        .then((a) => {
          this._imageUrl = a;
        })
        .catch((_) => {
          this._imageUrl = "/assets/Mistigris-logo-sansCB.small.png";
        });
    }
  }

  public goToDetail() {
    this.router.navigate(["/cats", this._cat.id]);
  }
}
