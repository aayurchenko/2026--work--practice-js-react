
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    let key = JSON.stringify(args);
    let result;

    if(cache.has(key)) {
      result = cache.get(key)
      return result;
    } else {
      result = fn(...args)
      cache.set(key, result);
      return result
    }
  }
}

function calculatePrice(price, quantity, discount) {
  console.log('Вычисляю стоимость');

  const total = price * quantity;
  return total - total * discount / 100;
}

const memoizedPrice = memoize(calculatePrice);

console.log(memoizedPrice(100, 2, 10));
// Вычисляю стоимость
// 180

console.log(memoizedPrice(100, 2, 10));
// 180

console.log(memoizedPrice(100, 3, 10));
// Вычисляю стоимость
// 270

console.log(memoizedPrice(100, 2, 10));
// 180


function joinWords(first, second) {
  console.log('Соединяю слова');
  return `${first}-${second}`;
}

const memoizedJoin = memoize(joinWords);

console.log(memoizedJoin('hello', 'world'));
// Соединяю слова
// hello-world

console.log(memoizedJoin('hello', 'world'));
// hello-world

console.log(memoizedJoin('world', 'hello'));
// Соединяю слова
// world-hello