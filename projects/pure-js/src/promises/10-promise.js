
const loadUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        {name: "Anna"}
      )
    }, 1000);
  })
}
const loadNotifications = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        ['Сообщение 1', 'Сообщение 2']
      )
    }, 1500);
  })
}

const loadSettings = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        {theme: 'dark'}
      )
    }, 500);
  })
}

async function loadSequentially() {
    const start = Date.now();
    const user = await loadUser();
    const notifications = await loadNotifications();
    const settings = await loadSettings();
    
    console.log(`Пользователь: ${user.name}, \nУведомления: ${notifications}, \nТема:${settings.theme}`);
    console.log(`Последовательно: ${Date.now() - start}мс`);
    return {user, notifications, settings};
    console.log(error.message)
}

async function loadInParallel() {
    const start = Date.now();
    const [user, notifications, settings] = await Promise.all([
      loadUser(),
      loadNotifications(),
      loadSettings()
    ]);
    console.log(`Пользователь: ${user.name}, \nУведомления: ${notifications}, \nТема:${settings.theme}`);
    console.log(`Параллельно: ${Date.now() - start}мс`);
    return {user, notifications, settings};
    console.log(error.message)
}


loadSequentially()
  .then(() => {
    return loadInParallel()
  })
  .catch(error => {
    console.log(`Ошибка ${error.message}`)
  })