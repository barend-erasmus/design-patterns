import { Line } from '../line';

export class SwitchBoard {

    private lines: Line[] = [];

    constructor(numberOfLines: number) {
        for (let i = 0; i < numberOfLines; i ++) {
            this.lines.push(new Line(true, i));
        }
    }

    public call(): Line {
        const line: Line = this.getAvailableLine();

        line.startCall();

        return line;
    }

    private getAvailableLine(): Line {
        return this.lines.find((line) => line.isAvailable);
    }
}
