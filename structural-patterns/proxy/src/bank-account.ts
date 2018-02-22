export class BankAccount {
    constructor(private balance: number) {

    }

    public checkBalance(): number {
        return this.balance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public withdraw(amount: number): void {
        this.balance -= amount;
    }
}
