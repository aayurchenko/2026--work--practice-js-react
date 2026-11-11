/*
Задача 2. Первый промис

Создай функцию wait(delay), которая возвращает Promise.

Требования:
- Promise переходит в fulfilled через delay миллисекунд.
- Результатом промиса должна быть строка «Ожидание завершено».
- Получи результат с помощью .then() и выведи его в консоль.
*/

function wait(delay) {
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Ожидание завершено')
    }, delay);
  });
  
}

wait(3000).then((result) => {
  // Здесь выведи result
  console.log(result)
});