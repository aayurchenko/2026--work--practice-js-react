
async function getCompletedTodosByUsername(username) {
  
  const url = `https://jsonplaceholder.typicode.com/users?username=${username}`;

  const response = await fetch(url);

  if(!response.ok) {
    throw new Error(`${response.status}`);
  } 
  
  const users = await response.json();
  
  if(users.length === 0) {
    throw new Error(`Массив пользователей пуст.`);
  }
  
  const user =  users[0];
  
  const url2 = `https://jsonplaceholder.typicode.com/todos?userId=${user.id}`;
  
  const response2 = await fetch(url2);
  
  if(!response2.ok) {
    throw new Error(`${response2.status}`);
  } 

  const todos = await response2.json();

  if(todos.length === 0) {
    throw new Error(`Массив задач пользователя пуст`);
  }

  const completedTodos = todos.filter((todo) => todo.completed === true ) 

  return {
    user, 
    completedTodos
  }
}


getCompletedTodosByUsername('Bret')
  .then(res => {
    console.log('Пользователь:', res.user.name);
    console.log('Выполненных задач:', res.completedTodos.length);
  })
  .catch(error => {
    console.log(error.message)
  })
  .finally(() => {
    console.log('Работа функции завершена.')
  })