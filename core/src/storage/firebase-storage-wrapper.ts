import {
  FirebaseStorage,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { Storage } from ".";

export class FirebaseStorageWrapper implements Storage {
  private storage: FirebaseStorage;

  constructor(storage: FirebaseStorage) {
    this.storage = storage;
  }

  async uploadFile(file: File, url: string) {
    const fileRef = ref(this.storage, url);
    await uploadBytes(fileRef, file);
  }

  async getDownloadUrl(url: string) {
    const fileReference = ref(this.storage, url);
    return await getDownloadURL(fileReference);
  }
}
