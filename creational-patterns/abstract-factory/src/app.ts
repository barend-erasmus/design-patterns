import { IPhoneFactory } from "./abstract-factories/phone";
import { SamsungFactory } from "./concrete-factories/samsung-factory";
import { VodaphoneFactory } from "./concrete-factories/vodaphone-factory";
import { ISmartPhone } from "./abstract-models/smart-phone";
import { IDumbPhone } from "./abstract-models/dumb-phone";

const manufacturer: string = 'samsung';

let factory: IPhoneFactory = null;

switch (manufacturer) {
    case 'samsung':
        factory = new SamsungFactory();
        break;
    case 'vodaphone':
        factory = new VodaphoneFactory();
        break;
}

const smartPhone: ISmartPhone = factory.getSmartPhone();
const dumbPhone: IDumbPhone = factory.getDumbPhone();

console.log(`Smart phone: ${smartPhone? smartPhone.name : 'not available'}`);
console.log(`Dumb phone: ${dumbPhone? dumbPhone.name : 'not available'}`);