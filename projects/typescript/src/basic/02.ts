// Задача 1. Напиши здесь функцию wrapInArray.
function wrapInArray<T>(value: T): T[] {
  let array: T[] = [];

  array.push(value);
  console.log(array)
  return array;
}

wrapInArray(7);       // [7], тип number[]
wrapInArray("кот");   // ["кот"], тип string[]s