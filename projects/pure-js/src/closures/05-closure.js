function createCart() {
  let items = [];

  return {
    addItem(name, price) {
      items.push({name:name, price:price});
    },
    getTotal() {
      return items.reduce((sum, item) => sum+=item.price,0)
    },
    getItems() {
      return [...items];
    },
    clear() {
      items = [];
    }
  }
}

const cart = createCart();

cart.addItem('Телефон', 1000);
cart.addItem('Чехол', 100);
cart.addItem('Наушники', 300);

console.log(cart.getItems());
// [
//   { name: 'Телефон', price: 1000 },
//   { name: 'Чехол', price: 100 },
//   { name: 'Наушники', price: 300 }
// ]

console.log(cart.getTotal()); // 1400

const externalItems = cart.getItems();
externalItems.push({ name: 'Поддельный товар', price: 5000 });

console.log(externalItems.length);  // 4
console.log(cart.getItems().length); // 3
console.log(cart.getTotal());        // 1400

cart.clear();

console.log(cart.getItems()); // []
console.log(cart.getTotal()); // 0