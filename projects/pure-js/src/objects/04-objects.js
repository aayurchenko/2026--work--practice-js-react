// Задача 4. Проверка свойства
// Реализуй функцию hasProperty(object, property).
// Она должна вернуть true, если у объекта есть собственное свойство,
// и false в противном случае.
// Используй Object.hasOwn().

function hasProperty(object, property) {
  // Твой код здесь
  return Object.hasOwn(object, property)
}

console.log(hasProperty({ name: 'Иван', age: 30 }, 'age')); // true
console.log(hasProperty({ name: 'Иван', age: 30 }, 'city')); // false

