// Задача 3. Напиши здесь функцию makePair.


function makePair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2]
}

console.log(makePair("возраст", 25)); // тип [string, number]
console.log(makePair(true, "готово")); // тип [boolean, string]