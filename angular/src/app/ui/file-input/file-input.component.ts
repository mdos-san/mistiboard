import { Component, Input } from "@angular/core";
import { CoreService } from "../../core/core.service";
import { Cat, CatFactory } from "@mistiboard/core";

@Component({
  selector: "file-input",
  templateUrl: "./file-input.component.html",
})
export class FileInputComponent {
  @Input({ required: true })
  uploadUrl: string = "";
  @Input({ required: true })
  cat: Cat = CatFactory();

  constructor(public core: CoreService) {}

  onFileSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files === null || element.files.length === 0) {
      return;
    }

    try {
      this.core.core.storage.uploadFile(element.files[0], this.uploadUrl);
      this.cat.hasPicture = true;
    } catch (_) {}
  }
}
