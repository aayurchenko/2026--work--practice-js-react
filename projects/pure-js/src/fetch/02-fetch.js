
async function getUserPosts(userId, limit = 3) {
  const params = new URLSearchParams({
    userId: String(userId)
  });

  const url =
  `https://jsonplaceholder.typicode.com/posts?${params.toString()}`;

  
  const response = await fetch(url);
  
  if(!response.ok) {
    throw new Error(`${response.status} умер 200`)
  }

  const posts = await response.json();

  if(posts.length === 0) {
    throw new Error(`У пользователя ${userId} нет постов`)
  }

  return posts.slice(0, limit);


}

getUserPosts(1, 3)
  .then(posts => {
    console.log(`Получено постов: ${posts.length}`);


    const titles = posts.map(post => post.title);

    console.log('Заголовки:');
    console.log(titles);

    return getUserPosts(999, 3);
  })
  .then(posts => {
    console.log(posts);
  })
  .catch(error => {
    console.log(`Ошибка: ${error.message}`);
  })
  .finally(() => {
    console.log('Работа завершена.')
  })