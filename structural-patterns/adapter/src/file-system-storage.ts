export class FileSystemStorage {

    public read(): number[] {
        const result: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        console.log(`Read ${result.length} bytes.`);

        return result;
    }

    public write(data: number[]): void {
        console.log(`Write ${data.length} bytes.`);
    }
    
}