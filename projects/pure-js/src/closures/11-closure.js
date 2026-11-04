function throttle(fn, delay) {

  let isThrottled = false;
  return function(...args) {
    if (!isThrottled) {
      fn(...args);
      isThrottled = true;
      setTimeout(() => isThrottled = false, delay)
    } 
    return

    
  }
}
function logMessage(message) {
  console.log(message);
}

const throttledLog = throttle(logMessage, 1000);

throttledLog('Вызов 1'); // выводится сразу

setTimeout(() => {
  throttledLog('Вызов 2'); // игнорируется
}, 200);

setTimeout(() => {
  throttledLog('Вызов 3'); // игнорируется
}, 500);

setTimeout(() => {
  throttledLog('Вызов 4'); // выводится
}, 1200);

setTimeout(() => {
  throttledLog('Вызов 5'); // игнорируется
}, 1500);

setTimeout(() => {
  throttledLog('Вызов 6'); // выводится
}, 2400);