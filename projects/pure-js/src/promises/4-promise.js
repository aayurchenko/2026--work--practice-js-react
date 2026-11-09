function getUser(id) {
  console.log('Загружаю пользователя...')
  return new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve({id, name: "Anna"})
    }, 1000);
  })
}

function getorders(userId) {
  console.log('Загружаю заказы пользователя 10...')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId, price: 500 },
        { id: 2, userId, price: 300 },
        { id: 3, userId, price: 200 }
      ])
    }, 1000);
  })
}

getUser(10)
.then((user) => {
    console.log(`Пользователь: ${user.name}.`)
    return getorders(user.id);
  })
  .then((products) => {
    console.log(`Количество заказов: ${products.length}.`);
    console.log(`Общая стомость: ${products.reduce((res, item) => res + item.price, 0)}.`);
    return products
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log('Операция завершена')
  })