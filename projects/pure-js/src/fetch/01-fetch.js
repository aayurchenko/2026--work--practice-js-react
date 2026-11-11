
async function getPost(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status}: не удалось получить пост`
    );
  }

  const post = await response.json();

  return post;
}


getPost(999999)
  .then(post => {
    console.log('Получен пост:');
    console.log(post);
    console.log(`Заголовок: ${post.title}`);
  })
  .catch(error => {
    console.log(`Ошибка: ${error.message}`);
  })
  .finally(() => {
    console.log('Запрос завершён');
  }); 