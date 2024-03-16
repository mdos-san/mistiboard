import { Database } from ".";
import { Entity, EntityMap } from "../entities";
import { Subject } from "rxjs";

export class FakeDatabaseService<T extends Entity> implements Database<T> {
  private entities: EntityMap<T> = new Map();
  private entitiesSubject = new Subject<EntityMap<T>>();

  constructor() {
    console.log("Instanciate FakeDatabaseService");
  }

  getEntities() {
    return this.entities;
  }

  getEntitiesSubject() {
    return this.entitiesSubject;
  }

  upsert(entity: T) {
    this.entities.set(entity.id, entity);
    this.entitiesSubject.next(this.entities);
  }

  getById(entityId: T["id"]): T | null {
    return this.entities.get(entityId) || null;
  }
}
