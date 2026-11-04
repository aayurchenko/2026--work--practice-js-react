// Задача 2. Сумма значений
// Найди сумму всех оценок объекта.
// Реши задачу двумя способами:
// 1. С помощью for...in.
// 2. С помощью Object.values().
// Ожидаемый результат: 250.

const scores = {
  math: 90,
  history: 75,
  english: 85,
};

// Твой код здесь
let sum = 0;  

for (const key in scores) {
  sum += scores[key];
}
console.log(sum)

let res = Object.values(scores).reduce((sum, value) => sum + value, 0)
console.log(res)