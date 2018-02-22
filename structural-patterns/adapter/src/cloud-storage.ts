export class CloudStorage {

    public download(): number[] {
        const result: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        console.log(`Downloaded ${result.length} bytes.`);

        return result;
    }

    public upload(data: number[]): void {
        console.log(`Uploaded ${data.length} bytes.`);
    }

}
