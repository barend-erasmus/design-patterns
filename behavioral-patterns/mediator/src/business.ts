import { BusinessMediator } from './business-mediator';

export class Business {

    private businessMediator: BusinessMediator = null;

    constructor(
        public name: string,
    ) {

    }

    public receive(from: string, message: string): void {
        console.log(`${this.name}: Message received from '${from}'.`);
    }

    public send(to: string, message: string): void {
        this.businessMediator.send(this, to, message);
    }

    public setMediator(businessMediator: BusinessMediator): void {
        this.businessMediator = businessMediator;
    }
}
