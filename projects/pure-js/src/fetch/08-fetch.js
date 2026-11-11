
async function requestJson(url , options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  const res = await response.json();

  return res;
}


async function getUserAndAlbums(userId) {

  const url1= `https://jsonplaceholder.typicode.com/users/${userId}`;
  const url2 = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;

  const [user, albums] = await Promise.all([
    requestJson(url1),
    requestJson(url2)
  ]);

  return {
    user, albums
  }
}

getUserAndAlbums(1)
  .then(res => {
    console.log('Пользователь:', res.user.name);
    console.log('Количество Альбомов:', res.albums.length)
  })
  .catch(error => {console.log(error.message);})
  .finally(() => {console.log('Вызов завершен')})