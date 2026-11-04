class BankAccount {
  constructor(owner, pin, balance) {
    this.owner = owner;
    this.#pin = pin;
    this.#balance = balance;
  }
  #pin;
  #balance;

  deposit(amount) {
    if(isFinite(amount) && amount > 0) {
      this.#balance += amount;
    } else {
      console.log('Некоректная сумма')
    }
  }

  #correctPin(pin) {
     if (pin === this.#pin) {
      return true
     } 
     return false;
  }

  withdraw(amount, pin) {
    if (this.#correctPin(pin)) {
    
      if  (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
      } else {
        console.log('Неверная сумма снятия')
      }

    } else {
      console.log('Неверный пин')
    }
  }

  getBalance(pin) {
    if(this.#correctPin(pin)) {
      return this.#balance;
    } else {
      return "Неправильный пинкод.";
    }
  }
  
}






const account = new BankAccount('Анна', 1234, 1000);

console.log(account.owner); // Анна

account.deposit(500);
console.log(account.getBalance(1234)); // 1500

account.withdraw(300, 1234);
console.log(account.getBalance(1234)); // 1200

account.withdraw(100, 9999); // Неверный PIN
console.log(account.getBalance(1234)); // всё ещё 1200

console.log(account.getBalance(9999)); // Неверный PIN
