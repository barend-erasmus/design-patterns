import { ShapeFactory } from './factories/shape';
import { IShape } from './interfaces/shape';

const factory: ShapeFactory = new ShapeFactory();

const shape: IShape = factory.getShape('circle', 'Red');

console.log(shape.toString());
