import { HotDrinkMaker } from './template/hot-drink-maker';

export class FilterCoffeeMaker extends HotDrinkMaker {

    public getIngredients(): void {
        console.log('Filter Coffee Maker - Get water.');
        console.log('Filter Coffee Maker - Get coffee.');
    }

    public serve(): void {
        console.log('Filter Coffee Maker - Serve with milk.');
        console.log('Filter Coffee Maker - Serve with sugar.');
    }
}
