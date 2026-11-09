async function makeRequest(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Привет!')
    }, 2000);
  })
}
console.log('Начало программы')

const something = await makeRequest()

console.log(something)
console.log('Конец программы')