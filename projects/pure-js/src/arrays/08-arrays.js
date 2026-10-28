const tasks = [
  { id: 1, title: 'Изучить map' },
  { id: 2, title: 'Изучить filter' },
  { id: 3, title: 'Изучить reduce' },
  { id: 4, title: 'Повторить массивы' },
];

const taskWithId3 = tasks.findIndex((task) => task.id === 3);

let removedTasks = [];

if (taskWithId3 !== -1) {
  removedTasks = tasks.splice(taskWithId3, 1);
}

const newTask = { id: 5, title: 'Изучить splice' };

tasks.splice(1, 0, newTask);

console.log(taskWithId3);
console.log(removedTasks);
console.log(tasks);