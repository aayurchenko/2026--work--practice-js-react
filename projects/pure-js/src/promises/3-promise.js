const getNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject(new Error('Не удалось получить число'));
      resolve(5)
    }, 1000);
  })
}

getNumber()
  .then((res) => {
    console.log(`Получено: ${res}`)
    return res * 2
  })
  .then((res) => {
    console.log(`После умножения: ${res}`)
    return res + 10
  })
  .then((res) => {
    console.log(`После сложения: ${res}`);
    return res;
  })
  .then((res) => {
    console.log(`Финальное значение: ${res}`);
    return res;
  })
  .catch((err) => {
    console.log(err.message)
  })
  .finally(() => {
    console.log("Цепочка завершена")
  })
