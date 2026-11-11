// Задача 7. Интерфейс, readonly и необязательное свойство.


interface User {
  readonly id: number;
  name: string;
  age?: number; 
}

function describeUser(user:User): string {

  return `${user.name}, возраст${user.age !== undefined? `: ${user.age}.` : ` не указан.` }`;
}

const user1: User = {
  id: 1,
  name: "Анна",
  age: 25,
};
const user3: User = {
  id: 1,
  name: "Анна",
  age: 0,
};

const user2: User = {
  id: 2,
  name: "Иван",
};

console.log(describeUser(user1));
console.log(describeUser(user2));
console.log(describeUser(user3));

