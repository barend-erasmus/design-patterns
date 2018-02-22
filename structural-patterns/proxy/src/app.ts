import { BankAccount } from './bank-account';
import { DebitCard } from './proxies/debit-card';

const bankAccount: BankAccount = new BankAccount(5000);
const debitCard: DebitCard = new DebitCard(bankAccount);

debitCard.pay(200);

console.log(debitCard.toString());
