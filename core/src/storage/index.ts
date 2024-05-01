export abstract class Storage {
  public abstract uploadFile: (file: File, url: string) => Promise<void>;
  public abstract getDownloadUrl: (url: string) => Promise<string>;
}
