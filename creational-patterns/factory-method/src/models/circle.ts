import { IShape } from "../interfaces/shape";

export class Circle implements IShape {
    constructor(
        public color: string,
    ) {

    }

    public toString(): string {
        return `${this.color} Circle.`;
    }
}