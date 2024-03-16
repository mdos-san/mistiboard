import { FakeDatabaseService } from "./fake-database.service";
import { Entity } from "../entities";

export class DatabaseFactory {
  constructor() {}

  static new<T extends Entity>() {
    return new FakeDatabaseService<T>();
  }
}
