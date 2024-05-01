export * from "./entities";

import firebaseConfig from "./firebase.options.json";
import { Authentification } from "./authentification";
import { Cat } from "./entities/cat";
import { DatabaseCat, DatabaseFamily } from "./database";
import { Family } from "./entities/family";
import { FirebaseAuthentificationService } from "./authentification/firebase-authentification.service";
import { FirebaseDatabaseService } from "./database/firebase-database.service";
import { FirebaseStorageWrapper } from "./storage/firebase-storage-wrapper";
import { Storage } from "./storage";
import { browserSessionPersistence, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

export class Core {
  public authentification: Authentification;
  public databaseCat: DatabaseCat;
  public databaseFamily: DatabaseFamily;
  public storage: Storage;

  constructor() {
    const firebaseApp = initializeApp(firebaseConfig, "mistiboard-dev");
    const auth = getAuth(firebaseApp);
    auth.setPersistence(browserSessionPersistence);
    const firestore = getFirestore(firebaseApp);
    const firebaseStorage = getStorage(firebaseApp);

    this.authentification = new FirebaseAuthentificationService(auth);
    this.databaseCat = new FirebaseDatabaseService<Cat>(firestore, "cats");
    this.databaseFamily = new FirebaseDatabaseService<Family>(
      firestore,
      "families",
    );
    this.storage = new FirebaseStorageWrapper(firebaseStorage);

    this.authentification.subscribeIsAuth().subscribe((isAuth) => {
      if (isAuth) {
        this.databaseCat.setupOnSnapshot();
        this.databaseFamily.setupOnSnapshot();
      }
    });
  }
}
