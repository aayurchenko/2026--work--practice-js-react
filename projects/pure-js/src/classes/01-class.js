class Clock2 {
  constructor({template}) {
    this.template = template
  }

  stop() {
      clearInterval(this.timer);
  };

  start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
  };

  render()  {
    let date = new Date();
  
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }
}

let clock2 = new Clock2({template: 'h:m:s'})
clock2.start();
setTimeout(() => {
  clock2.stop();
  console.log('Часы остановлены')
}, 10000);
