// Задача 10. Массив объектов и возможный undefined.

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  {id: 1, name: 'Клавиатура', price: 5000},
  {id: 2, name: 'Мышь', price: 2500},
  {id: 3, name: 'Монитор', price: 30000}
]

function findProductById(products: Product[], id: number): Product | undefined {
  
  const res = products.find((product) => product.id === id);
  console.log(res);

  return res;
}

findProductById(products, 2);  // объект «Мышь»
findProductById(products, 10); // undefined