
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    
    if (called) {
      return result;
    } 
    called = true;
    result = fn(...args)  
    return result;
        
  }
}

function createUser(name, age) {
  console.log('Пользователь создан');

  return {
    name,
    age
  };
}

const createUserOnce = once(createUser);

console.log(createUserOnce('Анна', 25));
console.log(createUserOnce('Максим', 30));