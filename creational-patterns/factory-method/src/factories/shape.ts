import { IShape } from '../interfaces/shape';
import { Circle } from '../models/circle';
import { Triangle } from '../models/triangle';

export class ShapeFactory {

    public getShape(type: string, color: string): IShape {
        switch (type) {
            case 'circle':
                return new Circle(color);
            case 'triangle':
                return new Triangle(color);
            default:
                return null;
        }
    }
}
