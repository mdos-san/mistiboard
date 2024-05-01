import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddMedicalEventComponent } from "../add-medical-event/add-medical-event.component";
import {
  Cat,
  CatFactory,
  CatMedicalFile,
  CatMedicalFileFactory,
} from "@mistiboard/core/build/entities/cat";

@Component({
  selector: "cat-medical-file",
  templateUrl: "./cat-medical-file.component.html",
  styleUrl: "./cat-medical-file.component.css",
})
export class CatMedicalFileComponent {
  @Input() cat: Cat = CatFactory();
  medicalFile: CatMedicalFile = CatMedicalFileFactory();

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.computeMedicalFile();
  }

  handleNewMedicalEvent() {
    const dialogRef = this.dialog.open(AddMedicalEventComponent);
    dialogRef.componentInstance.onNewMedicalEvent.subscribe(
      this.onNewMedicalEvent.bind(this),
    );
  }

  onNewMedicalEvent(ev: Partial<CatMedicalFile>) {
    this.cat.medicalEvents.push(ev);
    this.computeMedicalFile();
  }

  computeMedicalFile() {
    if (!this.cat.medicalEvents) {
      this.cat.medicalEvents = [];
    }

    this.cat.medicalEvents.forEach((medicalEvent) => {
      this.medicalFile = Object.assign(this.medicalFile, medicalEvent);
    });
  }
}
