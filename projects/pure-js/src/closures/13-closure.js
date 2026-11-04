
function createIdGenerator(prefix, start = 1) {

  return function() {
    return `${prefix}-${String(start++).padStart(3, '0')}`
  }
}

const generateUserId = createIdGenerator('USER');

console.log(generateUserId()); // USER-001
console.log(generateUserId()); // USER-002
console.log(generateUserId()); // USER-003

const generateOrderId = createIdGenerator('ORDER', 50);

console.log(generateOrderId()); // ORDER-050
console.log(generateOrderId()); // ORDER-051