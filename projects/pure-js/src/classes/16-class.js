class User {
  
  static _users = [];
  
  static getUsersCount() {
    return this._users.length;
  }
  
  static getAverageAge() {
    if (this._users.length > 0) {
      return this._users.reduce((totalAge, item) => totalAge += item.age, 0) / this.getUsersCount();
    } 
    return 0;
  } 
  
  static findUser(name) {
    return this._users.find((item) => item.name === name )
  }

  constructor(name, age) {

    if(!( typeof name === "string" && name.trim().length > 0) || !(Number.isInteger(age) && age > 0)) {
      throw new Error("Некорректные данные");
    }
    this.name = name;
    this.age = age;
    User._users.push(this)
  }

  getInfo() {
    console.log(`${this.name}, ${this.age}`)
  }
}

new User("Алексей", 20); // OK
new User("Мария", 25);   // OK

new User("", 20);        // Ошибка
new User("   ", 20);     // Ошибка
new User(123, 20);       // Ошибка
new User("Иван", -5);    // Ошибка
new User("Иван", 2.5);   // Ошибка