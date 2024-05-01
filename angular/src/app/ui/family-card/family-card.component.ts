import { Component, Input } from "@angular/core";
import { Family, FamilyFactory } from "@mistiboard/core";

@Component({
  selector: "family-card",
  templateUrl: "./family-card.component.html",
  styleUrl: "./family-card.component.css",
})
export class FamilyCardComponent {
  @Input({ required: true })
  family: Family = FamilyFactory();
}
