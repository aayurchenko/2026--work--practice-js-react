class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getInfo() {
    console.log(`Сотрудник ${this.name} с зп: ${this.salary}.`)
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  work() {
    console.log(`Сотрудник ${this.name} работает.`)
  }

  increaseSalary(percent) {
    if(Number.isFinite(percent) && percent > 0) {
      this.salary += this.salary*percent/100
    }
  }

}

class Developer extends Employee {
  constructor(name, salary, language) {
    super(name, salary);
    this.language = language;
  }

  work() {
    console.log(`Разработчик ${this.name} пишет код на ${this.language}.`)
  }

  getInfo() {
    super.getInfo();
    console.log(`Язык программирования: ${this.language}.`)
  }


}


class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary);
    this.bonus = bonus;
  }

  getAnnualSalary() {
    return (this.salary + this.bonus) * 12;
  }

  work() {
    console.log(`Менеджер ${this.name} управляет командой.`)
  }

}


const dev = new Developer("Алексей", 100000, "JavaScript");

console.log(dev.getAnnualSalary());