export type Entity = {
  id: string;
  collection: string;
};

export type EntityMap<T extends Entity> = Map<T["id"], T>;
