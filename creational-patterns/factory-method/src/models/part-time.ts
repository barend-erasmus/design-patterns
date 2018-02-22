import { IEmployee } from '../interfaces/employee';

export class PartTimeEmployee implements IEmployee {

    public hourlyRate: number;

    constructor() {
        this.hourlyRate = 8;
    }

    public toString(): string {
        return `Part Time Employee - ${this.hourlyRate} USD per hour.`;
    }
}
