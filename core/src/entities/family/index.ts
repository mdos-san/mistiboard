import { Entity } from "..";

export type Family = Entity & {
  name: string;
  capacity: number;
};

export function FamilyFactory(): Family {
  const family: Family = {
    id: "",
    collection: "family",
    name: "",
    capacity: 0,
  };

  return family;
}
