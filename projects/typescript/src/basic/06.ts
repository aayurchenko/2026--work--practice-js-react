// Задача 5. Напиши функцию getLength с ограничением дженерика.

type HasLength = { 
  length: number;
}

function getLength<T extends HasLength>(value: T): number {
  console.log(value.length);
  return value.length;
}


getLength("кот");          // 3
getLength([10, 20, 30]);   // 3
getLength({ length: 7 });  // 7