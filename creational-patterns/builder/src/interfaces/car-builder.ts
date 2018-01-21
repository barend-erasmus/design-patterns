import { Car } from '../models/car';
import { IEngine } from './engine';

export interface ICarBuilder {
    build(): Car;
    reset(): ICarBuilder;
    setEngine(engine: IEngine): ICarBuilder;
    setNumberOfSeats(n: number): ICarBuilder;
}
