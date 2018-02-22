import { CloudStorage } from '../cloud-storage';
import { FileSystemStorage } from '../file-system-storage';

export class CloudStorageAdapter {

    private cloudStorage: CloudStorage = new CloudStorage();

    constructor() {

    }

    public write(bytes: number[]): void {
        this.cloudStorage.upload(bytes);
    }

}
