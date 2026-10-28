const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];

const firstFruit = fruits.shift();

const indexOfKiwi = fruits.indexOf('kiwi');

const firstTwoFruits = fruits.slice(0, 2);

console.log(firstFruit); // Output: 'apple'
console.log(fruits); // Output: ['banana', 'orange', 'kiwi', 'mango']

console.log(indexOfKiwi); // Output: 2
console.log(firstTwoFruits); // Output: ['banana', 'orange']
