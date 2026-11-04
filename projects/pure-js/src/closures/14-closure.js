
function createUndoableValue(value) {
  let history = [];
  return {
    
    getValue() {
      return value;
    },
    setValue(newValue) {
      history.push(value);
      value = newValue;
     return this.getValue(value);
    },
    undo() {
      if(history.length > 0) {
        let lastElement = history.pop();
        value = lastElement;
        return value;

      } else {
        console.log('Больше нечего отменять.')
        return value;
      }
    },
    getHistory() {
      return [...history];
    }
  }
}

const text = createUndoableValue('Черновик');

console.log(text.getValue());
// Черновик

console.log(text.setValue('Первая версия'));
// Первая версия

console.log(text.setValue('Вторая версия'));
// Вторая версия

console.log(text.setValue('Финальная версия'));
// Финальная версия

console.log(text.getHistory());
// ['Черновик', 'Первая версия', 'Вторая версия']

console.log(text.undo());
// Вторая версия

console.log(text.undo());
// Первая версия

console.log(text.getHistory());
// ['Черновик']

console.log(text.undo());
// Черновик

console.log(text.undo());
// Больше нечего отменять
// Черновик