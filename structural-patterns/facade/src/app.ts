import { Customer } from './customer';
import { Mortage } from './facade/mortage';

const mortage: Mortage = new Mortage();

const customer: Customer = new Customer('1234567890');

console.log(`Customer ${mortage.isEligible(customer, 50000) ? 'is' : 'is not'} eligible`);
