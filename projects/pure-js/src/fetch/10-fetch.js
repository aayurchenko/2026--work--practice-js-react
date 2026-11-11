
async function getPost(postId) {
  
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  const response = await fetch(url);

  if(!response.ok) {
    throw new Error(`Ошибка с ${postId}, HTTP-статус: ${response.status}`)
  }

  const res = await response.json();

  return res;
}

async function getSeveralPosts(postIds) {
  const promises = postIds.map((id) => getPost(id));

  const res = await Promise.allSettled(promises);

  const successfull = res.filter(promise => promise.status === 'fulfilled');
  const failed = res.filter(promise => promise.status === 'rejected');

  return {
    successfull, 
    failed
  }
}

getSeveralPosts([1, 2, 999])
  .then(res => {
    console.log('Успешных запросов:', res.successfull.length);
    console.log('Запросов с ошибкой:', res.failed.length);
  })
  .catch(error => {
    console.log(`Общая ошибка: ${error.message}`);
  });