const cart = [
  { name: 'Мышь', price: 2500, quantity: 2 },
  { name: 'Клавиатура', price: 7000, quantity: 1 },
  { name: 'Наушники', price: 12000, quantity: 3 },
];

const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) 

const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)

console.log(`Общая стоимость товаров в корзине: ${totalPrice} руб.`);
console.log(`Общее количество товаров в корзине: ${totalQuantity} шт.`);