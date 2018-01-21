import { IEngine } from '../interfaces/engine';

export class Car {
    constructor(
        public engine: IEngine,
        public isAutomatic: boolean,
        public numberOfSeats: number,
    ) {

    }

    public toString(): string {
        return `${this.engine.toString()}\r\n${this.numberOfSeats} Seat(s).\r\n${this.isAutomatic ? 'Automatic' : 'Manual'} Transmission.`;
    }
}
