// Задача 17. Пересечение типов через &.

type PersonalInfo = {
  name: string;
  age: number;
}

type JobInfo = {
  position: string;
  salary: number;
}

type StaffProfile = PersonalInfo & JobInfo;

const staff: StaffProfile = {
  name: 'Anna',
  age: 25,
  position: 'Разработчик',
  salary: 120000, 
};

function describeStaff(staff: StaffProfile): string {
  return `${staff.name}, ${staff.age} лет, ${staff.position}, зарплата: ${staff.salary}₽`
}
console.log(describeStaff(staff));