// Задача 15. Наследование, protected и super.

class Employee {
  name: string;
  protected salary: number

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  department: string; 

  constructor(name: string, salary: number, department: string) {
    super(name, salary);
    this.department = department;
  }

  getAnnualSalary(): number {
    return this.salary * 12;
  }
}

const manager = new Manager("Анна", 100000, "Разработка");

console.log(manager.name);              // "Анна"
console.log(manager.department);        // "Разработка"
console.log(manager.getAnnualSalary()); // 1200000

// console.log(manager.salary);