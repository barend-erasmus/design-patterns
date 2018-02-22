import { Investor } from './observer/investor';

export class Stock {

    private investors: Investor[] = [];

    constructor(private symbol: string) {

    }

    public notify(price: number): void {
        for (const investor of this.investors) {
            investor.update(this.symbol, price);
        }
    }

    public observe(investor: Investor): void {
        this.investors.push(investor);
    }
}
