// Задача 14. Класс и модификаторы доступа.
class BankAccount {
  readonly owner: string;
  private balance: number;


  constructor(owner: string, balance: number) {
    this.owner  = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }



}

const account = new BankAccount("Анна", 1000);

account.deposit(500);

console.log(account.owner);        // "Анна"
console.log(account.getBalance()); // 1500

// account.owner = "Иван";
// console.log(account.balance);