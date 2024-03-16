import { Component, Input } from "@angular/core";
import {
  Cat,
  CatFactory,
  CatMedicalFile,
  CatMedicalFileFactory,
  Modification,
} from "../../entities/cat";
import { MatDialog } from "@angular/material/dialog";
import { AddMedicalEventComponent } from "../add-medical-event/add-medical-event.component";

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

  onNewMedicalEvent(ev: Modification<CatMedicalFileComponent>) {
    console.log(ev, this.cat);
    this.cat.medicalEvents.push(ev);
    this.computeMedicalFile();
  }

  private computeMedicalFile() {
    this.cat.medicalEvents.forEach((medicalEvent) => {
      this.medicalFile = Object.assign(this.medicalFile, medicalEvent);
    });
  }
}
