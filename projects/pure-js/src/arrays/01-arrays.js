const numbers = [3, 7, 2, 9, 4];


numbers.push(6);

numbers.unshift(1);

const lastNumber = numbers.pop();
console.log(numbers);
console.log(lastNumber); // Output: 6

console.log(numbers.includes(7)); // Output: true