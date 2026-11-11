
async function getTodoStatistics() {

  const url1 = `https://jsonplaceholder.typicode.com/users`;
  const url2 = `https://jsonplaceholder.typicode.com/todos`;
  
  const [response1, response2] = await Promise.all([
    fetch(url1),
    fetch(url2)
  ]) 

  if (!response1.ok) {
    throw new Error(`${response1.status}`)
  }  

  if (!response2.ok) {
    throw new Error(`${response2.status}`)
  }  

  const users = await response1.json();
  const todos = await response2.json();

  const completedTodos = todos.filter(todo => todo.completed);

  const completedCountByUser = new Map();

  completedTodos.forEach(todo => {
    if(completedCountByUser.get(todo.userId)) {
      completedCountByUser.set(todo.userId, completedCountByUser.get(todo.userId) + 1)
    } else {
      completedCountByUser.set(todo.userId, completedCountByUser.get(todo.userId) || 1)
    }
  });
  
  const newUsers = users.map(({id, name}) => {
    return {id, name, completedCount: completedCountByUser.get(id)}
  })
  const leaders = newUsers.sort((a, b) => b.completedCount - a.completedCount).slice(0, 3)
  
  const totalCompleted = newUsers.reduce((sum, user) => sum + user.completedCount, 0)
  
  const averageCompleted = totalCompleted / users.length;
  

  return {
    leaders,
    totalCompleted,
    averageCompleted
  }
  
}

getTodoStatistics()
  .then(({ leaders, totalCompleted, averageCompleted }) => {
    console.log('Три лидера:');

    leaders.forEach(({ name, completedCount }, index) => {
      console.log(
        `${index + 1}. ${name}: ${completedCount}`
      );
    });

    console.log('Всего выполнено:', totalCompleted);
    console.log(
      'Среднее:',
      averageCompleted.toFixed(1)
    );
  })
  .catch(error => {
    console.log(`Ошибка: ${error.message}`);
  })
  .finally(() => {
    console.log('Анализ завершён');
  });