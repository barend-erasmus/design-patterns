import { CloudStorage } from "../cloud-storage";
import { FileSystemStorage } from "../file-system-storage";

export class StorageAdapter {

    private cloudStorage: CloudStorage = new CloudStorage();
    private fileSystemStorage: FileSystemStorage = new FileSystemStorage();

    constructor(private type: string) {

    }

    public save(content: string): void {

        const bytes: number[] = this.toBytes(content);

        switch (this.type) {
            case 'cloud':
                this.cloudStorage.upload(bytes);
                break;
            case 'file-system':
                this.fileSystemStorage.write(bytes);
                break;
        }
    }

    private toBytes(str: string): number[] {
        const bytes: number[] = [];

        for (var i = 0; i < str.length; ++i) {
            bytes.push(str.charCodeAt(i));
        }

        return bytes;
    }

}