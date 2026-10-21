const productName = 'Клавиатура';
const productPrice = 5000;
const productCount = "2"; // если передавать число, то будет number, если строку, то будет string. Считается итого одинаково потому что срабатывает приведение типов, но лучше передавать число, чтобы не было проблем с типами данных.
// все операнды приводят строку к числу, кроме сложения
const productDiscount = 10;
let productFinalPrice = productPrice * productCount - (productPrice * productCount * productDiscount) / 100;

let isExpensive = productFinalPrice > 8000;

console.log(
  `Товар: ${productName}
  Цена: ${productPrice}
  Количество: ${productCount}
  Стоимость без скидки: ${productPrice * productCount}
  Скидка: ${productDiscount}% - ${productPrice * productDiscount * productCount / 100}
  Итого: ${productFinalPrice}`
)

console.log("product name:", typeof productName)
console.log("product price:", typeof productPrice)
console.log("product count:", typeof productCount)
console.log("product discount:", typeof productDiscount)
console.log("product final price:", typeof productFinalPrice)
console.log("is expensive:", typeof isExpensive)
console.log("is expensive:", isExpensive)