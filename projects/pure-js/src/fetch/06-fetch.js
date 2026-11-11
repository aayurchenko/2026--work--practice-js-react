
async function getUserWithposts(userId) {

  const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`
  const userPostsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  
  const userPromise = fetch(userUrl);
  const postsPromise = fetch(userPostsUrl);

  const [userResponse, postsResponse] = await Promise.all([
    userPromise,
    postsPromise
  ]);

  if (!userResponse.ok) {
    throw new Error(`${userResponse.status}`)
  }
  if (!postsResponse.ok) {
    throw new Error(`${postsResponse.status}`)
  }

  const [user, posts ] = await Promise.all([
    userResponse.json(),
    postsResponse.json()
  ]);

  return {user, posts}
}

getUserWithposts(1)
  .then(res => {
    console.log('Имя:', res.user.name);
    console.log('Количество постов:', res.posts.length);
  })
  .catch(error => {
    console.log(`Ошибка: ${error.message}`);
  })
  .finally(() => {
    console.log('Запросы завершены');
  })