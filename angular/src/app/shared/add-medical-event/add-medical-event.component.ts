import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import {
  CatMedicalFile,
  CatMedicalFileFactory,
} from "@mistiboard/core/build/entities/cat";

@Component({
  selector: "add-medical-event",
  templateUrl: "./add-medical-event.component.html",
})
export class AddMedicalEventComponent {
  form = this.formBuilder.group({
    fiv: [false],
    felv: [false],
    sterilised: [false],
    note: [""],
  });

  @Output() onNewMedicalEvent = new EventEmitter<Partial<CatMedicalFile>>();

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) {}

  submitForm() {
    const { fiv, felv, sterilised, note } = this.form.value;

    const medicalEvent: Partial<CatMedicalFile> = {
      ...CatMedicalFileFactory(),
      date: new Date().toISOString(),
      note: note || "",
    };
    medicalEvent.sterilised = sterilised || false;
    medicalEvent.fiv = fiv || false;
    medicalEvent.felv = felv || false;

    this.onNewMedicalEvent.emit(medicalEvent);
    this.dialog.closeAll();
  }
}
