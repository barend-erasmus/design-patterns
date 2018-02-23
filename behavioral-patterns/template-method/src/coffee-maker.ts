import { HotDrinkMaker } from './template/hot-drink-maker';

export class CoffeeMaker extends HotDrinkMaker {

    public getIngredients(): void {
        console.log('Coffee Maker - Get water.');
        console.log('Coffee Maker - Get milk.');
        console.log('Coffee Maker - Get sugar.');
        console.log('Coffee Maker - Get coffee.');
    }

    public serve(): void {
        console.log('Coffee Maker - Serve with extra milk.');
        console.log('Coffee Maker - Serve with biscuit.');
    }
}
