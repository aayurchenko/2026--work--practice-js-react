const users = [
  { id: 1, name: 'Анна', age: 24, active: true },
  { id: 2, name: 'Иван', age: 17, active: false },
  { id: 3, name: 'Мария', age: 31, active: true },
  { id: 4, name: 'Пётр', age: 20, active: false },
];

const userWithId3 = users.find((user) => user.id === 3);

const hasInactiveUser = users.some((user) => !user.active);

const allUsersAreAdults = users.every((user) => user.age >= 18);

console.log(userWithId3); // Output: { id: 3, name: 'Мария', age: 31, active: true }
console.log(hasInactiveUser); // Output: true
console.log(allUsersAreAdults); // Output: false    