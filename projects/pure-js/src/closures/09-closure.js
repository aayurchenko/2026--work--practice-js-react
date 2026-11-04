
function createNotifier() {
  let subscribers = [];
  return {
    subscribe(callback) {
      subscribers.push(callback);
      return function() {
        subscribers = subscribers.filter((item)=> item !== callback);


      }
    },
    notify(message) {
      subscribers.forEach((subscriber) => {
        subscriber(message)
      }
      )
    },
    getSubscribersCount() {
      return subscribers.length
    }
  }
}

const notifier = createNotifier();

const unsubscribeAnna = notifier.subscribe(message => {
  console.log(`Анна получила: ${message}`);
});

const unsubscribeMax = notifier.subscribe(message => {
  console.log(`Максим получил: ${message}`);
});

console.log(notifier.getSubscribersCount()); // 2

notifier.notify('Привет!');
// Анна получила: Привет!
// Максим получил: Привет!

unsubscribeAnna();

console.log(notifier.getSubscribersCount()); // 1

notifier.notify('Новое сообщение');
// Максим получил: Новое сообщение

unsubscribeMax();

console.log(notifier.getSubscribersCount()); // 0