import { CoffeeMaker } from './coffee-maker';
import { FilterCoffeeMaker } from './filter-coffee-maker';

const coffeeMaker: CoffeeMaker = new CoffeeMaker();
const filterCoffeeMaker: FilterCoffeeMaker = new FilterCoffeeMaker();

coffeeMaker.order();

filterCoffeeMaker.order();
