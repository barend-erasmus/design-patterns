import { ISmartPhone } from '../abstract-models/smart-phone';

export class GalaxyS8 implements ISmartPhone {

    public dimensions: string;
    public name: string;
    public weight: number;
    public wLan: string;

    constructor() {
        this.dimensions = '148.9 x 68.1 x 8 mm';
        this.name = 'Galaxy S8';
        this.weight = 155;
        this.wLan = 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot';
    }
}
