/*
Задача 3. Успех или ошибка

Напиши функцию checkNumber(number), возвращающую Promise.

Требования:
- Если number больше нуля, промис выполняется успешно и возвращает number.
- Если number равен нулю или меньше него, промис отклоняется с объектом Error.
- Обработай успешный результат через .then().
- Обработай ошибку через .catch().
- Проверь оба варианта работы.
*/
function checkNumber(number) {
  if (number > 0) {
    return new Promise((resolve) => {
      resolve(number)
    }) 
  } else {
    return new Promise((reject) => {
      reject(new Error(message));
    })
  }
}