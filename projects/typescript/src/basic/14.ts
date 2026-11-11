// Задача 13. Вложенные необязательные свойства.

interface Address {
  city: string; 
  street: string;
}

interface Person {
  name: string;
  address?: Address;
}

function getPersonCity(person: Person): string {
  console.log(person.address?.city ??  'Город не указан')
  return person.address?.city ??  'Город не указан';
}

const person1: Person = {
  name: "Анна",
  address: {
    city: "Москва",
    street: "Тверская",
  },
};

const person2: Person = {
  name: "Иван",
};

getPersonCity(person1); // "Москва"
getPersonCity(person2); // "Город не указан"