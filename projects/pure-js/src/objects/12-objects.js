// Задача 12. Методы объекта и this
// Добавь объекту calculator четыре метода:
// sum, subtract, multiply и divide.
// Методы должны обращаться к a и b через this.

const calculator = {
  a: 10,
  b: 5,

  // Твои методы здесь
  sum() {
    return this.a + this.b
  },
  subtract() {
    return this.a - this.b
  },
  multiply() {
    return this.a * this.b
  },
  divide() {
    return this.a / this.b
  }
};

console.log(calculator.sum());      // 15
console.log(calculator.subtract()); // 5
console.log(calculator.multiply()); // 50
console.log(calculator.divide());   // 2

