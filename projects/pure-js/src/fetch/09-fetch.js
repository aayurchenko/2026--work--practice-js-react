
async function fetchWithTimeout(url, timeout) {
  const controller = new AbortController();

  const timerId = setTimeout(() => {
    controller.abort()
  }, timeout);

  try {

    const response = await fetch(url, {
      signal: controller.signal
    });

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      return await response.json()

  } finally {
    clearTimeout(timerId)
  }


}

fetchWithTimeout(
  'https://jsonplaceholder.typicode.com/posts/1',
  5000)
  .then( post => {
    console.log('Пост;', post.title);
  })
  .catch(error => {
    console.log(`Ошибка: ${error.message}`)
  })

fetchWithTimeout(
  'https://jsonplaceholder.typicode.com/posts/1',
  1
)
  .catch(error => {
    console.log(`Ошибка: ${error.message}`)
  })
