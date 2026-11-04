function createCounter() {
  let counter = 0;

  return function () {
    counter++;
    return counter;
  };
}

const counter = createCounter();
const counter2 = createCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3

console.log(counter2()); // 1
console.log(counter2()); // 2

console.log(counter());  // 4