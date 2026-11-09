
function requestData(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        {
          message: "Данные получены."
        }
      );
    }, delay);
  })
}

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Превышено время ожидания'));
    }, ms);
  })
}

function runRequest(requestDelay, timeoutDelay) {
  console.log(
    `Запуск: запрос ${requestDelay}, тайм-аут ${timeoutDelay}`
  );
  return Promise.race([
    requestData(requestDelay),
    timeout(timeoutDelay)
  ])  
  .then((res) => {
    console.log(res.message);
    return res
  })
  .catch((err) => {
    console.log(err.message);
    
  })
}


runRequest(1000, 2000)
  .finally(() => {
    return runRequest(3000, 1000);
  });