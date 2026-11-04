class NumberCollection extends Array{
  isEmpty() {
    if(this.length === 0) {
      return true;
    }
    return false;
  }
 
  sum() {
    return this.reduce((sum, item) => sum+=item, 0);
  }

  average() {
    if (!this.isEmpty()) {
      return this.sum()/this.length;
    }
    return 0
  }

}


const numbers = new NumberCollection(5, 10, 15, 20);

console.log(numbers);           // NumberCollection(4) [5, 10, 15, 20]
console.log(numbers.isEmpty()); // false
console.log(numbers.sum());     // 50
console.log(numbers.average()); // 12.5

numbers.push(25);

console.log(numbers.sum()); // 75

const largeNumbers = numbers.filter(number => number >= 15);

console.log(largeNumbers);
console.log(largeNumbers instanceof NumberCollection); // true
console.log(largeNumbers.sum());                     

const emptyNumbers = new NumberCollection();

console.log(emptyNumbers.isEmpty());
console.log(emptyNumbers.sum());
console.log(emptyNumbers.average());