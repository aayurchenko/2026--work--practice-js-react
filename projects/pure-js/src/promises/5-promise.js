function loadUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Anna"
      });
    }, 1000);
  })
}

function loadProducts() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(
        [
          { id: 1, name: 'Телефон' },
          { id: 2, name: 'Ноутбук' }
        ]
      )
    }, 1500);
  })
}

function loadSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        {
          theme: 'dark',
          language: 'ru'
        }
      )
    }, 500);
  })
}


const start = Date.now();

Promise.all([
  loadUser(),
  loadProducts(),
  loadSettings()
])
  .then(([user, products, settings]) => {
    console.log(`Пользователь: ${user.name}`);
    console.log(`Количество товаров: ${products.length}`)
    console.log(`Тема: ${settings.theme}`)
    console.log(`Язык: ${settings.language}`)
    console.log(`Время: ${Date.now() - start} мс`);
  })
  .catch(error => {
  console.log(`Ошибка: ${error.message}`);
  })
  .finally(() => {
    console.log('Все операции завершены');
  });