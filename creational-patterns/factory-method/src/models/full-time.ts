import { IEmployee } from '../interfaces/employee';

export class FullTimeEmployee implements IEmployee {

    public hourlyRate: number;

    constructor() {
        this.hourlyRate = 15;
    }

    public toString(): string {
        return `Full Time Employee - ${this.hourlyRate} USD per hour.`;
    }
}
