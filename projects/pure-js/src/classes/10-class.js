class Clock {
  constructor({template})  {
    this.template = template
  }

  render() {
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let sec = time.getSeconds();

    if (hours < 10) {hours = "0" + hours}
    if (minutes < 10) {minutes = "0" + minutes}
    if (sec < 10) {sec = "0" + sec}

    let output = this.template
      .replace("h", hours)
      .replace("m", minutes)
      .replace("s", sec)

    console.log(output)
  }

  start() {
    this.render();
    this.timer = setInterval(() => {this.render()}, 1000)
  }

  stop() {
    clearInterval(this.timer)
  }

}
const clock = new Clock({ template: 'h:m:s' });

clock.start();

setTimeout(() => {
  clock.stop();
}, 5000);