
function memoize(fn) {
  const cache = new Map();
  return function(number) {
    let result;

    if (cache.has(number)) {
      result = cache.get(number)
      return result;
    } else {
      result = fn(number);
      cache.set(number, result);
      return result;
    }
  }
}

function calculateSquare(number) {
  console.log(`Вычисляю квадрат числа ${number}`);
  return number * number;
}

const memoizedSquare = memoize(calculateSquare);

console.log(memoizedSquare(5));
// Вычисляю квадрат числа 5
// 25

console.log(memoizedSquare(5));
// 25

console.log(memoizedSquare(10));
// Вычисляю квадрат числа 10
// 100

console.log(memoizedSquare(5));
// 25

console.log(memoizedSquare(0));
console.log(memoizedSquare(0));