
function createStopwatch() {
  let seconds = 0;
  let timerId = null;

  return {
    start() {
      if (timerId !== null) {
        console.log('Секундомер уже запущен');
        return;
      }
      timerId = setInterval(() => {console.log(`Прошло секунд: ${++seconds} `)}, 1000 )
    },
    stop() {
      if(timerId === null) {
        console.log("Секундомер уже остановлен");
        return;
      }
      clearInterval(timerId);
      timerId = null;
    },
    getTime() {
      return seconds
    },
    reset() {
      if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
      }
      seconds = 0;
    }
  }
}

const stopwatch = createStopwatch();

stopwatch.start();

setTimeout(() => {
  console.log('Текущее время:', stopwatch.getTime());
  stopwatch.start(); // повторный запуск запрещён
}, 2500);

setTimeout(() => {
  stopwatch.stop();
  console.log('После остановки:', stopwatch.getTime());
}, 4500);

setTimeout(() => {
  stopwatch.start(); // снова можно запустить
}, 5500);

setTimeout(() => {
  stopwatch.reset();
  console.log('После сброса:', stopwatch.getTime());
}, 7500);