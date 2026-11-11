/*
Задача 1. Асинхронный колбэк

Напиши функцию runAfterDelay(callback, delay).

Требования:
- Функция принимает колбэк и задержку в миллисекундах.
- После указанной задержки она вызывает переданный колбэк.
- Колбэк должен получить строку «Операция завершена».
- Проверь функцию с двумя разными задержками.
*/

function runAfterDelay(callback, delay) {
  setTimeout(() => {
    callback('Операция завершена');
  }, delay);
}

runAfterDelay((message) => {console.log(message)}, 1000)
runAfterDelay((message) => {console.log(message)}, 3000)