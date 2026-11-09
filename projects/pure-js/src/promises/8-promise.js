
function requestServer(name, delay, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail === true) {
        reject(new Error(`${name} недоступен.`))
      } else {
        resolve(`${name} вернул данные`)
      }
    }, delay);
  })
}

const requests = [
  requestServer('Сервер 1', 500, true),
  requestServer('Сервер 2', 100, false),
  requestServer('Сервер 3', 300, true)
];
const failedRequests = [
  requestServer('Сервер A', 300, true),
  requestServer('Сервер B', 500, true),
  requestServer('Сервер C', 200, true)
];

Promise.any(requests)
  .then(result => {
    console.log(`Первый успешный ответ: ${result}`);
  })
  .catch(error => {
    console.log('Все серверы недоступны');
  });

Promise.any(failedRequests)
  .then(result => {
    console.log(`Первый успешный ответ: ${result}`);
  })
  .catch(error => {
    console.log('Все серверы недоступны');
    error.errors.forEach(item => {
      console.log(`${item.message}`)
    });
  });