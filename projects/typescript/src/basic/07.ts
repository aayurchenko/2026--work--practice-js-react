// Задача 6. Объединение типов и сужение через typeof.

function formatValue(value: string | number): string {
  
  if ( typeof value === "string") {
    console.log(value.toUpperCase())
    return value.toUpperCase();
  } else {
    console.log(`${value}₽`)
    return `${value}₽`
  }
}

formatValue("привет"); // "ПРИВЕТ"
formatValue(500);      // "500₽"