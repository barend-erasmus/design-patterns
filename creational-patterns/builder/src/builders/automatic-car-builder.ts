import { ICarBuilder } from '../interfaces/car-builder';
import { IEngine } from '../interfaces/engine';
import { Car } from '../models/car';
import { SportEngine } from '../models/sport-engine';

export class AutomaticCarBuilder implements ICarBuilder {

    private engine: IEngine = null;
    private numberOfSeats: number = null;

    public build(): Car {
        return new Car(this.engine, true, this.numberOfSeats);
    }

    public reset(): ICarBuilder {
        this.engine = null;
        this.numberOfSeats = null;

        return this;
    }

    public setEngine(engine: IEngine): ICarBuilder {
        this.engine = engine;
        return this;
    }

    public setNumberOfSeats(n: number): ICarBuilder {
        this.numberOfSeats = n;
        return this;
    }
}
