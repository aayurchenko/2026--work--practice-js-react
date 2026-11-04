// Задача 3. Количество свойств
// Определи количество собственных перечисляемых свойств объекта.
// Не считай свойства вручную.
// Ожидаемый результат: 4.

const product = {
  title: 'Ноутбук',
  price: 85000,
  brand: 'Lenovo',
  inStock: true,
};



// Твой код здесь
let count = 0;
for (const key in product) {
  count++;
}

console.log(count)