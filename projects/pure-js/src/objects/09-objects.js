// Задача 9. Подсчёт повторений
// Создай объект, в котором ключ — название фрукта,
// а значение — количество его повторений в массиве.

const fruits = [
  'apple',
  'banana',
  'apple',
  'orange',
  'banana',
  'apple',
  'apple',
  'apple',
  'apple',
  'apple',
];

// Ожидаемый результат:
// { apple: 3, banana: 2, orange: 1 }

// Твой код здесь

const res = fruits.reduce((res, fruit) => {
  if(res[fruit]) {
    res[fruit] += 1;
  }else {
    res[fruit] = 1;
  }
  return res;
}, {})

console.log(res)