import { Car } from './car';
import { Dealership } from './dealership';

const dealership: Dealership = new Dealership();

dealership.add(new Car('BMW'));
dealership.add(new Car('VW'));
dealership.add(new Car('Porsche'));

dealership.visit('John Doe');
