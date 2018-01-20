import { ISmartPhone } from "../abstract-models/smart-phone";
import { IDumbPhone } from "../abstract-models/dumb-phone";

export interface IPhoneFactory {
    getDumbPhone(): IDumbPhone;
    getSmartPhone(): ISmartPhone;
}