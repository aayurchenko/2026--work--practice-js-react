const departments = [
  { name: 'Frontend', employees: ['Анна', 'Иван'] },
  { name: 'Backend', employees: ['Мария', 'Пётр'] },
  { name: 'QA', employees: ['Олег'] },
];

const allEmployees = departments.flatMap((department) => department.employees)
const upperCaseEmployees = allEmployees.map((item) => item.toUpperCase())
const employeesString = upperCaseEmployees.join(", ")

console.log(allEmployees)
console.log(upperCaseEmployees)
console.log(employeesString)