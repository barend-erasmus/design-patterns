import { StorageAdapter } from "./adapters/storage";

const storageAdapter: StorageAdapter = new StorageAdapter('file-system');

storageAdapter.save('hello world');