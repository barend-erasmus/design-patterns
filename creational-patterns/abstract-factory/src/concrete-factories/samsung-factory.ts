import { IPhoneFactory } from '../abstract-factories/phone';
import { IDumbPhone } from '../abstract-models/dumb-phone';
import { ISmartPhone } from '../abstract-models/smart-phone';
import { GalaxyS8 } from '../concrete-models/galaxy-s8';

export class SamsungFactory implements IPhoneFactory {

    public getDumbPhone(): IDumbPhone {
        return null;
    }

    public getSmartPhone(): ISmartPhone {
        return new GalaxyS8();
    }
}
