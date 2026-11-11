
async function deletePost(postId) {
  
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`

  const response = await fetch(url, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  } else {
    return `Пост ${postId} успешно удален`
  }

}


deletePost(1)
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(`Ошибка: ${error.message}`);
  })
  .finally(() => {
    console.log('Запрос завершён');
  });