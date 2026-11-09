
const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(id <= 0) {
        reject(new Error('Некорректный ID пользователя.'))
      } else {
        resolve(
          {
            id,
            name: 'Анна'
          }
        )
      }
    }, 700);
  })
}

const getPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        [
          { id: 1, userId, title: 'Первый пост' },
          { id: 2, userId, title: 'Второй пост' }
        ]
      )
    }, 700);
  })
}

async function loadProfile(userId) {
  try {
    const user = await getUser(userId);
    console.log(user.name)
    const posts = await getPosts(user.id);
    console.log(posts)
    return {user, posts}
  } catch (error) {
    console.log(error.message);
    return null;
  } finally {
    console.log('Загрузка профиля завершена');
  }
}

// loadProfile(10)
//   .then(profile => {
//     console.log('Итоговый профиль:', profile)
//   });

loadProfile(-1)
  .then(profile => {
    console.log('Итоговый профиль:', profile)
  });