import { IPhoneFactory } from '../abstract-factories/phone';
import { IDumbPhone } from '../abstract-models/dumb-phone';
import { ISmartPhone } from '../abstract-models/smart-phone';
import { SmartMini } from '../concrete-models/smart-mini';

export class VodaphoneFactory implements IPhoneFactory {

    public getDumbPhone(): IDumbPhone {
        return new SmartMini();
    }

    public getSmartPhone(): ISmartPhone {
        return null;
    }
}
