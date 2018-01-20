import { ICarBuilder } from "./interfaces/car-builder";
import { AutomaticCarBuilder } from "./builders/automatic-car-builder";
import { SportEngine } from "./models/sport-engine";
import { Car } from "./models/car";

const builder: ICarBuilder = new AutomaticCarBuilder();

const car: Car = builder.reset().setEngine(new SportEngine(1984, 162)).setNumberOfSeats(4).build();

console.log(car.toString());