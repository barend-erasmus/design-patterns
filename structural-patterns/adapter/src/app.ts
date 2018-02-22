import { CloudStorageAdapter } from './adapters/cloud-storage';
import { FileSystemStorage } from './file-system-storage';

const cloudStorageAdapter: CloudStorageAdapter = new CloudStorageAdapter();
cloudStorageAdapter.write(toBytes('hello world'));

const fileSystemStorage: FileSystemStorage = new FileSystemStorage();
fileSystemStorage.write(toBytes('hello world'));

function toBytes(str: string): number[] {
    const bytes: number[] = [];

    for (let i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
    }

    return bytes;
}
