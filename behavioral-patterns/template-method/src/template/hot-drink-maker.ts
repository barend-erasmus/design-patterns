export abstract class HotDrinkMaker {

    public abstract getIngredients(): void;
    public abstract serve(): void;

    public order(): void {
        this.getIngredients();
        this.serve();
    }
}
