import {
  Firestore,
  collection,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { Subject } from "rxjs";
import { Database } from ".";
import { Entity } from "../entities";

export class FirebaseDatabaseService<T extends Entity> implements Database<T> {
  private collectionName: string;
  private firestore: Firestore;
  private entities: Map<T["id"], T> = new Map();
  private entitiesSubject = new Subject<Map<T["id"], T>>();

  constructor(firestore: Firestore, collectionName: string) {
    this.collectionName = collectionName;
    this.firestore = firestore;
  }

  setupOnSnapshot() {
    onSnapshot(collection(this.firestore, this.collectionName), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const entityId = change.doc.ref.id;
        const entity = change.doc.data() as T; // TODO: Please type this correctly
        entity.id = entityId;

        if (change.type === "added" || change.type === "modified") {
          this.entities.set(entity["id"], entity);
        }

        if (change.type === "removed") {
          this.entities.delete(entity["id"]);
        }
      });

      this.entitiesSubject.next(this.entities);
    });
  }

  getEntities() {
    return this.entities;
  }

  getEntitiesAsArray() {
    return Array.from(this.entities.values()) as T[];
  }

  getEntitiesSubject() {
    return this.entitiesSubject;
  }

  upsert(entity: T) {
    setDoc(doc(this.firestore, this.collectionName, entity.id), entity);
  }

  getById(entityId: T["id"]): T | null {
    return this.entities.get(entityId) || null;
  }
}
