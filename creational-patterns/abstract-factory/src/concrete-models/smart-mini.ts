import { IDumbPhone } from '../abstract-models/dumb-phone';

export class SmartMini implements IDumbPhone {

    public dimensions: string;
    public name: string;
    public weight: number;

    constructor() {
        this.dimensions = '115 x 62.3 x 12.2 mm';
        this.name = 'Smart Mini';
        this.weight = 118;
    }
}
