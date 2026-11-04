// Задача 5. Только числовые значения
// Создай новый объект, содержащий только свойства
// с числовыми значениями.
// Исходный объект изменять нельзя.

const data = {
  name: 'Телефон',
  price: 50000,
  quantity: 3,
  available: true,
  discount: 10,
};

// Ожидаемый результат:
// { price: 50000, quantity: 3, discount: 10 }

// Твой код здесь
let res = {}

for (const key in data) {
  if(typeof(data[key]) === "number") {
    res[key] = data[key]
  }
  
}

console.log(res)