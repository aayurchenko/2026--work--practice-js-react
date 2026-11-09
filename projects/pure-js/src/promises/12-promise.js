
async function retry(operation, maxAttempts) {
  for (let i = 1; i <= maxAttempts; i++) {    
    try {
      const res = await operation();
      return res; 

    } catch (error) {
      console.log(error.message)
      if (i === maxAttempts) {
        throw error;
      } else continue
    };
  }  
  
}


function unstableRequest() {
  requestAttempt++;
  console.log(requestAttempt);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (requestAttempt < 3 && requestAttempt > 0) {
        reject(new Error(`Ошибка попытки ${requestAttempt}`));
      } else if (requestAttempt === 3) {
        resolve('Данные успешно получены')
      }
    }, 500);
  })
}
let requestAttempt = 0;

// retry(unstableRequest, 3)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(`Итоговая ошибка: ${error.message}`);
//   });

requestAttempt = 0;

retry(unstableRequest, 2)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(`Итоговая ошибка: ${error.message}`);
  });