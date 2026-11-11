// Задача 2. Напиши здесь функцию getFirst.

function getFirst<T>(value: T[]): T | undefined {

  if (value.length === 0) {
    return undefined;
  }

  console.log(value)

  return value[0];
}

getFirst([10, 20, 30]);    // 10
getFirst(["кот", "пёс"]);  // "кот"
console.log(getFirst<number>([]))    // undefined