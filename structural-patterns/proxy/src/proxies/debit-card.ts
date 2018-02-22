import { BankAccount } from '../bank-account';

export class DebitCard {

    constructor(private bankAccount: BankAccount) {

    }

    public pay(amount: number): void {
        this.bankAccount.withdraw(amount);
    }

    public toString(): string {
        return `Balance is ${this.bankAccount.checkBalance()}`;
    }
}
