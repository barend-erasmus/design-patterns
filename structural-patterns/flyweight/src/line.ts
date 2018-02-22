export class Line {
    constructor(public isAvailable: boolean, public index: number) {

    }

    public startCall(): void {
        this.isAvailable = false;
        console.log(`Call started on line ${this.index}`);
    }

    public endCall(): void {
        this.isAvailable = true;
        console.log(`Call ended on line ${this.index}`);
    }
}
