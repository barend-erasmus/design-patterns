import { Bank } from '../bank';
import { CreditBureau } from '../credit-bureau';
import { Customer } from '../customer';

export class Mortage {

    public bank: Bank = new Bank();
    public creditBureau: CreditBureau = new CreditBureau();

    public isEligible(customer: Customer, amount: number): boolean {
        if (!this.bank.hasSufficientSavings(customer, amount)) {
            return false;
        }

        if (!this.creditBureau.hasGoodCreditScore(customer)) {
            return false;
        }

        return true;
    }
}
