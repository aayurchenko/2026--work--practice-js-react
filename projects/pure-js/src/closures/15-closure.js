
function createTodoList() {

  let todos = [];
  let nextId = 1;

  return {
    add(text) {
      todos.push({
        id: nextId,
        text,
        completed: false
      });
      nextId++;
      return todos[todos.length - 1];
    },
    toggle(id) {
      const todo = todos.findIndex((item) => item.id === id );
      if (todo !== -1) {
        todos[todo].completed = !todos[todo].completed;
        return todos[todo];
      } else {
        console.log('Задача не найдена.');
        return null;
      }
    },
    remove(id) {
      todos = todos.filter((item) => item.id !== id );
      return todos;
    },
    getAll() {
      const copy = [...todos];
      return copy.map((item) => {return {...item}})
    },
    getCompleted() {
      let res = [...todos].filter((item) => item.completed === true)
      return res.map((item) => {return {...item}})
    }
  }
}


const todoList = createTodoList();

console.log(todoList.add('Изучить замыкания'));
console.log(todoList.add('Повторить массивы'));
console.log(todoList.add('Сделать практику'));

console.log(todoList.getAll());
// три задачи с id 1, 2, 3

todoList.toggle(2);

console.log(todoList.getCompleted());
// [{ id: 2, text: 'Повторить массивы', completed: true }]

todoList.toggle(2);

console.log(todoList.getCompleted());
// []

todoList.toggle(999);
// Задача не найдена

todoList.remove(1);

console.log(todoList.getAll());
// остались задачи 2 и 3

const externalTodos = todoList.getAll();

externalTodos[0].text = 'Взломанное название';
externalTodos.push({
  id: 999,
  text: 'Поддельная задача',
  completed: true
});

console.log(externalTodos);
console.log(todoList.getAll());