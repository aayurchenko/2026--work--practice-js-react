function createCounter(initialValue) {
  
  let value = initialValue
  return {
    
      increment() {
        value++;
        return value;
      },
      decrement() {
        value--;
        return value;
      },
      getValue() {return value},
      reset() {value = initialValue; return value}
    
  }
}

const counter = createCounter(10);

console.log(counter.getValue()); // 10
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
console.log(counter.getValue());  // 11

counter.reset();

console.log(counter.getValue()); // 10

const secondCounter = createCounter(100);

console.log(secondCounter.increment()); // 101
console.log(counter.getValue());        // всё ещё 10