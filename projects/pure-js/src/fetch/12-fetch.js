
function createCachedFetch(cacheTime) {
  
  const cache = new Map();

  return async function request(url) {
    const cachedItem = cache.get(url);

    if (cachedItem) {
      if (Date.now() - cachedItem.createdAt < cacheTime) {
        console.log('Данные взяты из кеша');
        return cachedItem.data;
      }
    } 
    console.log('Выполняется сетевой запрос');
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`${response.status}`)
    }

    const data = await response.json();

    cache.set(url, {
      data, 
      createdAt: Date.now()
    });
    return data;
  }
}


const cachedFetch = createCachedFetch(3000);
async function run() {
  const url =
    'https://jsonplaceholder.typicode.com/posts/1';

  const first = await cachedFetch(url);
  console.log('Первый:', first.title);

  const second = await cachedFetch(url);
  console.log('Второй:', second.title);

  await new Promise(resolve => {
    setTimeout(resolve, 3500);
  });

  const third = await cachedFetch(url);
  console.log('Третий:', third.title);
}

run().catch(error => {
  console.log(`Ошибка: ${error.message}`);
});