import { IEngine } from '../interfaces/engine';

export class SportEngine implements IEngine {

    constructor(
        public displacement: number,
        public power: number,
    ) {

    }

    public toString(): string {
        return `Engine with ${this.displacement} cc of displacement and ${this.power} kw of power.`;
    }
}
