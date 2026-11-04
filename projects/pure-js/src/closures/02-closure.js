function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier
  }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const multiplyByTen = createMultiplier(10);

console.log(double(5));        // 10
console.log(double(8));        // 16

console.log(triple(5));        // 15
console.log(triple(8));        // 24

console.log(multiplyByTen(4)); // 40

console.log(createMultiplier(4)(5)); // 20