class BankAccount {
  constructor(owner, accountNumber, balance) {
    this.owner = owner;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.history = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.history.push(`Пополнение: +${amount}`);
    }
  }

  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        this.history.push(`Снятие: -${amount}`)
      }
    }
  }

  transfer(account, amount) {
    if (this.balance >= amount && amount > 0) {
      if (this !== account) {
        this.balance -= amount;
        account.balance += amount;
        this.history.push(`Перевод на счёт ${account.accountNumber}, -${amount}`)
        account.history.push(`Перевод от счёта ${this.accountNumber}, +${amount}`)
      }
    }
  }

  getBalance() {
    return this.balance;
  }
  
  getHistory() {
    this.history.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`)
    })
  }

  showInfo() {
    console.log(`Счет номер: ${this.accountNumber}, владелец счёта: ${this.owner}, на счету ${this.balance}.`)
  }
}

const account1 = new BankAccount("Алексей", "111", 1000);
const account2 = new BankAccount("Мария", "222", 500);

console.log(account1 === account2); // false
console.log(account1 === account1); // true

account1.transfer(account2, 300);

console.log(account1.getBalance()); // 700
console.log(account2.getBalance()); // 800