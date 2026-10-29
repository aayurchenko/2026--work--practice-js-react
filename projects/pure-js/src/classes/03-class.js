class User  {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`Привет, меня зовут ${this.name}!`)
  }

  changeName(newName) {
    this.name = newName;
    console.log(`Имя изменено на ${this.name}.`)
  }


}

const user = new User('Анна');

user.sayName();
user.changeName('Ольга');
user.sayName();