import { IPrototype } from './prototype';

export class Nascar implements IPrototype {
    constructor(
        public displacement: number,
    ) {

    }

    public clone(): Nascar {
        return new Nascar(this.displacement);
    }

    public toString(): string {
        return `Nascar with ${this.displacement} cc of displacement.`;
    }
}
