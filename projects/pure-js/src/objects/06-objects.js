// Задача 6. Увеличение цен
// Создай новый объект, в котором каждая цена увеличена на 10%.
// Исходный объект изменять нельзя.
// Используй Object.entries(), map() и Object.fromEntries().

const prices = {
  bread: 50,
  milk: 90,
  cheese: 400,
};

// Ожидаемый результат:
// { bread: 55, milk: 99, cheese: 440 }

// Твой код здесь


let sum = Object.fromEntries(Object.entries(prices).map(([product, price]) => [
  product,
  Math.floor(price * 1,1)
]))
console.log(sum)