// Задача 11. Вложенный объект
// Реализуй функцию getEmployeeCount(company), которая возвращает
// общее количество сотрудников во всех отделах.

const company = {
  name: 'TechCorp',
  employees: {
    frontend: 4,
    backend: 3,
    design: 2,
  },
};


function getEmployeeCount(companyData) {
  let sum = 0;

  for (const key in companyData) {
    if (companyData.hasOwnProperty(key)) {
      const value = companyData[key];

      if (typeof value === 'object' && value !== null) {
        sum += getEmployeeCount(value);
      } else if (typeof value === 'number') {
        sum += value;
      }
    }
  }

  return sum;
}


console.log(getEmployeeCount(company)); // 9


