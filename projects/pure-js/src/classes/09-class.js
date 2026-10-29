
class AutoCounter {
  constructor(defaultValue) {
    this.counter = defaultValue;
  }
  show() {
    console.log(this.counter)
  };
  
  increment() {
    this.counter++;
  };
  
  start() {
    this.show();
    this.timer = setInterval(() => {this.increment(); this.show()}, 1000);
  };
  
  stop() {
    clearInterval(this.timer);
  };


}

const counter = new AutoCounter(0);

counter.start();

setTimeout(() => {
  counter.stop();
}, 4500);