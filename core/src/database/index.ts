import { Subject } from "rxjs";
import { Entity } from "../entities";
import { Cat } from "../entities/cat";
import { Family } from "../entities/family";

export abstract class Database<T extends Entity> {
  public abstract setupOnSnapshot: () => void;
  public abstract getEntities: () => Map<T["id"], T>;
  public abstract getEntitiesAsArray: () => T[];
  public abstract getEntitiesSubject: () => Subject<Map<T["id"], T>>;
  public abstract getById: (entityId: T["id"]) => T | null;
  public abstract upsert: (entity: T) => void;
}

export abstract class DatabaseCat extends Database<Cat> {}
export abstract class DatabaseFamily extends Database<Family> {}
