export class Investor {

    constructor(public name: string) {

    }

    public update(stockSymbol: string, price: number): void {
        console.log(`${this.name}: Stock '${stockSymbol}' changed to ${price}.`);
    }
}
