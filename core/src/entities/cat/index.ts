import { Entity } from "..";

export type Cat = Entity & {
  adoptionState: "PENDING" | "IMPOSSIBLE" | "ADOPTED";
  birthday: string;
  avaibleToAdoptionTimestamp: number;
  character: string;
  criterias: string;
  icad: string;
  id: string;
  name: string;
  notes: string;
  origin: string;
  medicalEvents: Array<Modification<CatMedicalFile>>;
};

export type CatMedicalFile = {
  fiv: boolean;
  felv: boolean;
  sterilised: boolean;
};

export type Modification<T> = Partial<T> & {
  date: string;
  note: string;
};

export function CatFactory(): Cat {
  const cat: Cat = {
    collection: "cat",
    adoptionState: "IMPOSSIBLE",
    avaibleToAdoptionTimestamp: 0,
    birthday: new Date().toISOString(),
    character: "",
    criterias: "",
    icad: "",
    id: "",
    name: "",
    notes: "",
    origin: "",
    medicalEvents: [],
  };

  return cat;
}

export function CatMedicalFileFactory(): CatMedicalFile {
  return {
    fiv: false,
    felv: false,
    sterilised: false,
  };
}
