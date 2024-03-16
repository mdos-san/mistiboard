import { Injectable, inject } from "@angular/core";
import {
  Firestore,
  collection,
  doc,
  onSnapshot,
  setDoc,
} from "@angular/fire/firestore";
import { Subject } from "rxjs";
import { Database } from ".";
import { Entity } from "../entities";

@Injectable({
  providedIn: "root",
})
export class FirestoreService<T extends Entity> implements Database<T> {
  private firestore: Firestore = inject(Firestore);
  private entities: Map<T["id"], T> = new Map();
  private entitiesSubject = new Subject<Map<T["id"], T>>();

  // TODO: ngOnInit
  constructor() {
    // TODO: Filter request to not abuse quota
    // TODO: TYPE PARAMETERS
    onSnapshot(collection(this.firestore, "cats"), (snapshot) => {
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

        this.entitiesSubject.next(this.entities);
      });
    });
  }

  getEntities() {
    return this.entities;
  }

  getEntitiesSubject() {
    return this.entitiesSubject;
  }

  upsert(cat: T) {
    setDoc(doc(this.firestore, "cats", cat.id), cat);
  }

  getById(catId: T["id"]): T | null {
    return this.entities.get(catId) || null;
  }
}
