import { Business } from './business';
import { BusinessMediator } from './business-mediator';

const businessMediator: BusinessMediator = new BusinessMediator();

const business1: Business = new Business('Business 1');
const business2: Business = new Business('Business 2');
const business3: Business = new Business('Business 3');
const business4: Business = new Business('Business 4');
const business5: Business = new Business('Business 5');

businessMediator.register(business1);
businessMediator.register(business2);
businessMediator.register(business3);
businessMediator.register(business4);
businessMediator.register(business5);

business1.send('Business 3', 'Hello World');
