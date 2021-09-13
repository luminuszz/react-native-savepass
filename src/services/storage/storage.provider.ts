export interface StorageProvider {
  save<Payload = any>(key: string, payload: Payload): Promise<void>;
  get<Payload = any>(key: string): Promise<Payload>;
}
