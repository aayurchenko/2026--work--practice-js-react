class Counter {
  constructor(counter) {
    this.counter = counter; 
  }

  show() {
    console.log('Текущее число', this.counter)
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}

const counter = new Counter(5);
counter.show();
counter.increment();
counter.show();
counter.decrement();
counter.show();