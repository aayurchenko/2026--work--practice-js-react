console.log('Начало программы');

const promise = new Promise((resolve, reject) => {
  console.log('Начало, состояние pending...')

  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('Ура, состояние резолв!')
    } else {
      reject("Увы, состояние неуспех.")
    }
  }, 1000);
})

promise 
  .then((successData) => {
    console.log('Успех! Получены данные:', successData)
  },
  (errorData) => {
    console.log('Ошибка, Получены данные:', errorData)
  })
  // .catch((errorData) => {
  //   console.log('Ошибка, Получены данные:', errorData)
  // })
  .finally(() => {
    console.log('Код в самом конце')
  })