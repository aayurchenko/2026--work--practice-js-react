const numbers = [-3, 4, 7, -2, 8, 0, 5, 12];

const positiveEvenNumbers = numbers.filter((num) => num > 0 && num % 2 === 0 );

const squaredNumbers = positiveEvenNumbers.map((num) => { return num * num; });

console.log(positiveEvenNumbers); // Output: [4, 8, 12]
console.log(squaredNumbers); // Output: [16, 64, 144]
console.log(numbers); // Output: [-3, 4, 7, -2, 8, 0, 5, 12]