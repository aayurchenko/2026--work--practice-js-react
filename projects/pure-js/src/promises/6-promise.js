
function loadResource(name, shouldFail, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail === false) {
        resolve(`${name} загружен`);
      } else {
        reject(new Error(`${name}: ошибка загрузки`));
      }
    }, delay);
  }) 
}

const requests = [
  loadResource('Пользователь', false, 500),
  loadResource('Товары', true, 1000),
  loadResource('Настройки', false, 700)
];

Promise.allSettled(requests)
  .then((res) => {
    res.forEach((item) => {
      if(item.status === 'fulfilled') {
        console.log(item.value)
      } else { 
        console.log(item.reason.message)
      }
    })
  })
  .finally(() => {console.log('Все запросы обработаны.')})