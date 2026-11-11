/*
Задача 9. Промисификация

Дана функция в стиле колбэков:

function loadData(id, callback) {
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error('Некорректный id'));
      return;
    }

    callback(null, { id, name: `Элемент ${id}` });
  }, 1000);
}

Требования:
- Создай для неё обёртку loadDataPromise(id), возвращающую Promise.
- Не изменяй исходную функцию loadData().
- Обработай успешный результат через .then().
- Обработай ошибку через .catch().
*/
