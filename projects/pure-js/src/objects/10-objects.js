// Задача 10. Группировка
// Сгруппируй имена пользователей по их роли.

const users = [
  { name: 'Анна', role: 'admin' },
  { name: 'Иван', role: 'user' },
  { name: 'Олег', role: 'user' },
  { name: 'Мария', role: 'admin' },
];

// Ожидаемый результат:
// {
//   admin: ['Анна', 'Мария'],
//   user: ['Иван', 'Олег']
// }

// Твой код здесь

const res = users.reduce((res, user) => {

  if(res[user.role]) {
    res[user.role].push(user.name)
  } else {
    res[user.role] = [user.name]
  }
  return res;
}, {})

console.log(res)