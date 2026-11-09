
function loadProduct(id) {
  return new Promise((resolve, reject) => {
    const delay = (4 - id) * 500;
    setTimeout(() => {
      console.log(`Товар ${id} загружен`);
      resolve(
        {
          id, 
          name: `Товар ${id}`,
        }
      )
    }, delay);
  })
}

async function loadProducts(ids) {
  const promises = ids.map(id => {
    return loadProduct(id)
  });
  const res = await Promise.all(promises);
  console.log('Все товары загружены.');
  return res;
}

loadProducts([1, 2, 3])
  .then(products => {
    console.log(products);
  })
  .catch(error => {
    console.log(`Ошибка: ${error.message}`);
  });