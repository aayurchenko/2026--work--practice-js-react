// Задача 4. Создай дженерик Box<T> и функцию createBox<T>.

type Box<T> = {
  value: T;
}

function createBox<T>(value: T): Box<T> {
  console.log({value})
  return {
    value,
  }
}

createBox("кот"); // { value: "кот" }, тип Box<string>
createBox(100);   // { value: 100 }, тип Box<number>