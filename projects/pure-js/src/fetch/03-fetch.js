
async function createPost(post) {
  
  const url = `https://jsonplaceholder.typicode.com/posts`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post),
  });
  
  if(!response.ok) {
    throw new Error(`${response.status}: ошибка HTTP. `)
  }

  const createdPost = await response.json()

  return createdPost;

}

const newPost = {
  title: 'Изучаю fetch',
  body: 'Отправляю первый POST-запрос',
  userId: 1
};

createPost(newPost)
  .then(post => {
    console.log(post)
  })
  .catch(error => {
    console.log(`Ошибка: ${error.message}`)
  })
  .finally(() => {
    console.log(`Завершили`)
  })