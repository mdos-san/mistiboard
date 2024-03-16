import { Cat } from "../entities/cat";
import { DatabaseCat, DatabaseFamily } from ".";
import { DatabaseFactory } from "./database.factory";
import { Family } from "../entities/family";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    { provide: DatabaseCat, useValue: DatabaseFactory.new<Cat>() },
    { provide: DatabaseFamily, useValue: DatabaseFactory.new<Family>() },
  ],
})
export class DatabaseModule {}
