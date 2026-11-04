// Задача 7. Максимальное значение
// Найди название самого тёплого дня.
// Ожидаемый результат: 'thursday'.

const temperatures = {
  monday: 12,
  tuesday: 17,
  wednesday: 15,
  thursday: 20,
  friday: 18,
};

// Твой код здесь
const dayWithMaxTemperature = Object.keys(temperatures).reduce((a, b) => (temperatures[a] > temperatures[b] ? a : b))

console.log(dayWithMaxTemperature)