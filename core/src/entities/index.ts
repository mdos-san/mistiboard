export * from "./cat";
export * from "./family";

export type Entity = {
  collection: string;
  id: string;
};

export type EntityMap<T extends Entity> = Map<T["id"], T>;
