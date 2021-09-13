import { StorageProvider } from './storage.provider';
import { AsyncProviderImplementation } from './asyncProvider.implementation';

class StorageService {
  constructor(private connectionProvider: StorageProvider) {}

  static instance(provider: StorageProvider) {
    return new StorageService(provider);
  }

  async getValues<T = any>(key: string): Promise<T> {
    return this.connectionProvider.get(key);
  }

  async saveValues(key: string, values: any) {
    let payload;
    const verifyValues = await this.connectionProvider.get(key);

    if (verifyValues) {
      payload = [...verifyValues, values];
    } else {
      payload = [values];
    }

    return this.connectionProvider.save(key, payload);
  }
}

export const storageProviderFactory = () => {
  const asyncProvider = new AsyncProviderImplementation();

  return StorageService.instance(asyncProvider);
};
