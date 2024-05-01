import { Entity } from "..";

export type HouseType = "house" | "apartment";

export type Family = Entity & {
  capacity: number;
  name: string;
  firstname: string;
  address: string;
  postalCode: string;
  city: string;
  phone: string;
  email: string;
  houseType: HouseType;
  peopleInHouse: number;
  childInHouse: number;
  dogInHouse: number;
  catInHouse: number;
  birdInHouse: number;
};

export function FamilyFactory(): Family {
  const family: Family = {
    id: "",
    collection: "families",
    name: "",
    capacity: 0,
    firstname: "",
    address: "",
    postalCode: "",
    city: "",
    phone: "",
    email: "",
    houseType: "house",
    peopleInHouse: 0,
    childInHouse: 0,
    dogInHouse: 0,
    catInHouse: 0,
    birdInHouse: 0,
  };

  return family;
}
