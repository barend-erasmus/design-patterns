import { IDumbPhone } from '../abstract-models/dumb-phone';
import { ISmartPhone } from '../abstract-models/smart-phone';

export interface IPhoneFactory {
    getDumbPhone(): IDumbPhone;
    getSmartPhone(): ISmartPhone;
}
