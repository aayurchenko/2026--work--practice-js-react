const products = [
  { name: 'Ноутбук', price: 90000, inStock: true },
  { name: 'Мышь', price: 2500, inStock: false },
  { name: 'Клавиатура', price: 7000, inStock: true },
  { name: 'Монитор', price: 30000, inStock: true },
  { name: 'Наушники', price: 12000, inStock: false },
];

const inStockProducts = [...products].filter(product => product.inStock).sort((a, b) => a.price - b.price).map(product => product.name)

console.log(inStockProducts);
console.log(products);