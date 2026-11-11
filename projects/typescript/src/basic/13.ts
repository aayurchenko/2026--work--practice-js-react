// Задача 12. Тип unknown и безопасное сужение.

function formatUnknown(value: unknown): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value.toString();
  } else if (typeof value === 'boolean') {
    return value ? "Да" : "Нет";
  } else {
    return "Неизвестное значение."
  }
}
formatUnknown("привет"); // "ПРИВЕТ"
formatUnknown(42);       // "42"
formatUnknown(true);     // "Да"
formatUnknown(false);    // "Нет"
formatUnknown({});       // "Неизвестное значение"
