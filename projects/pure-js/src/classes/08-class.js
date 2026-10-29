class DelayedMessage {
  constructor (message) {
    this.message = message;
  }

  show() {
    console.log(this.message);
  }
  
  showLater(delay) {
    setTimeout(() => this.show(), delay)
  }


}

const message = new DelayedMessage('Привет!');


message.show();
message.showLater(2000);