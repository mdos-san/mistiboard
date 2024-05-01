import { Entity } from "..";

export type Cat = Entity & {
  adoptionState: "NONE" | "PENDING" | "IMPOSSIBLE" | "ADOPTED";
  avaibleToAdoptionTimestamp: number;
  birthday: string;
  breed: string;
  character: string;
  coat: string;
  criterias: string;
  familyId: string;
  hasPicture: boolean;
  icad: string;
  id: string;
  medicalEvents: Array<Partial<CatMedicalFile>>;
  name: string;
  notes: string;
  origin: string;
};

export function CatFactory(): Cat {
  const cat: Cat = {
    adoptionState: "IMPOSSIBLE",
    avaibleToAdoptionTimestamp: 0,
    birthday: new Date().toISOString(),
    breed: "",
    character: "",
    coat: "",
    collection: "cats",
    criterias: "",
    familyId: "",
    hasPicture: false,
    icad: "",
    id: "",
    medicalEvents: [],
    name: "",
    notes: "",
    origin: "",
  };

  return cat;
}

export type CatMedicalFile = {
  fiv: boolean;
  felv: boolean;
  sterilised: boolean;
  clinical: string;
  date: string;
  note: string;
};

export function CatMedicalFileFactory(): CatMedicalFile {
  return {
    felv: false,
    fiv: false,
    sterilised: false,
    clinical: "",
    date: "",
    note: "",
  };
}
