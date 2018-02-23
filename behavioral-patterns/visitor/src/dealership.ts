import { Car } from './car';

export class Dealership {

    private cars: Car[] = [];

    public add(car: Car): void {
        this.cars.push(car);
    }

    public visit(inspector: string): void {
        for (const car of this.cars) {
            car.visit(inspector);
        }
    }
}
