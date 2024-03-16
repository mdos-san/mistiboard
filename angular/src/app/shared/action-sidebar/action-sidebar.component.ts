import { Component, Input } from "@angular/core";

export type Action = {
  label: string;
  handler: () => void | Promise<void>;
};

@Component({
  selector: "action-sidebar",
  templateUrl: "./action-sidebar.component.html",
  styleUrl: "./action-sidebar.component.css",
})
export class ActionSidebarComponent {
  @Input() actionList: Action[] = [];
}
