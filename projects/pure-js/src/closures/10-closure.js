
function debounce(fn, delay) {
  let timerId;
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {return fn(...args)}, delay)
  }
}
function search(text) {
  console.log(`Ищу: ${text}`);
}

const debouncedSearch = debounce(search, 1000);

debouncedSearch('j');

setTimeout(() => {
  debouncedSearch('ja');
}, 300);

setTimeout(() => {
  debouncedSearch('jav');
}, 600);

setTimeout(() => {
  debouncedSearch('java');
}, 900);