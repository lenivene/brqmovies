import storageLib from "@react-native-async-storage/async-storage";

export class Storage<K extends string> {
  async get(keyName: K): Promise<string | null> {
    return new Promise(async (resolve) => {
      const result = await storageLib.getItem(keyName);

      resolve(result);
    });
  }

  async set(keyName: K, value: string) {
    return new Promise((resolve) => {
      storageLib.setItem(keyName, value, resolve);
    });
  }

  async remove(keyName: K) {
    return new Promise((resolve) => {
      storageLib.removeItem(keyName, resolve);
    });
  }

  async clear() {
    return new Promise((resolve) => {
      storageLib.clear(resolve);
    });
  }
}

export const storage = new Storage();
