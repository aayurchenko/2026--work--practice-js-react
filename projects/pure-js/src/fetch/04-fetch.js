
async function updatePostTitle(postId, newTitle) {
  
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: newTitle}),
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  const res = await response.json();

  return res;
};

updatePostTitle(1, 'Заголовок изменен через PATCH')
  .then(updatedPost => {
    console.log(`Измененный пост:`, updatedPost);
  }) 
  .catch(error => {
    console.log(`Ошибка: ${error.message}`)
  })
  .finally(() => {
    console.log(`Запрос завершен.`)
  })