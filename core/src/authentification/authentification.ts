import { Subject } from "rxjs";

export abstract class Authentification {
  public abstract getIsAuth: () => boolean;
  public abstract subscribeIsAuth: () => Subject<boolean>;
  public abstract signInWithEmailAndPassword: (
    username: string,
    password: string,
  ) => void;
  public abstract signOut: () => void;
}
