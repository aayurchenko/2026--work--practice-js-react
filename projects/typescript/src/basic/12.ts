// Задача 11. Тип функции и callback.

type NumberOperation = (value1: number, value2: number) => number;

const add: NumberOperation = (a, b) => {
  return a + b;
}

const multiply: NumberOperation = (a, b) => {
  return a * b;
}

function executeOperation (value1: number, value2: number, fn: NumberOperation):number {
  return fn(value1, value2);
}

executeOperation(5, 3, add);      // 8
executeOperation(5, 3, multiply); // 15