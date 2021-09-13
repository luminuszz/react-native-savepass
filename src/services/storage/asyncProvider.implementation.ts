import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageProvider } from './storage.provider';

export class AsyncProviderImplementation implements StorageProvider {
  private asyncStorage = AsyncStorage;

  async get<Payload = any>(key: string): Promise<Payload | any> {
    const stringPayload = await this.asyncStorage.getItem(key);

    return JSON.parse(stringPayload);
  }

  save<Payload = any>(key: string, payload: Payload): Promise<void> {
    return this.asyncStorage.setItem(key, JSON.stringify(payload));
  }
}
