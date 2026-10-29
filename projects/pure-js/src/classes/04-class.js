class BankAccount {
  constructor(value) {
    this.balance = value;
  }

  showBalance() {
    console.log(`Баланс: ${this.balance}`);
  }

  deposit(values) {
    this.balance += values;
  }

  withdraw(values) {
    this.balance -= values;
  }
}

const account = new BankAccount(100);
account.showBalance();
account.deposit(50);
account.showBalance();
account.withdraw(30);
account.showBalance();