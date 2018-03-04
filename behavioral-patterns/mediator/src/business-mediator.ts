import { Business } from './business';

export class BusinessMediator {

    private businesses: Business[] = [];

    public register(business: Business): void {
        this.businesses.push(business);

        business.setMediator(this);
    }

    public send(from: Business, to: string, message: string): void {
        const business: Business = this.businesses.find((item) => item.name === to);

        business.receive(from.name, message);
    }
}
