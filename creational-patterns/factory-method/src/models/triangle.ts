import { IShape } from "../interfaces/shape";

export class Triangle implements IShape {
    constructor(
        public color: string,
    ) {
        
    }

    public toString(): string {
        return `${this.color} Triangle.`;
    }
}