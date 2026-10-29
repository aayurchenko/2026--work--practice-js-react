class Lamp {
    constructor(name) {
      this.name = name;
      this.status = false;
    }
    showStatus() {
      if (this.status) {
        console.log(`Имя лампы ${this.name}, она включена`)
      } else 
        console.log(`Имя лампы ${this.name}, она выключена`)
      };
  
  turnOn() {
    this.status = true;
  };
  
  turnOff() {
    this.status = false;
  };
  
  toggle() {
    if (this.status) {this.turnOff()} else {this.turnOn()}
  };

}

const lamp = new Lamp('Настольная лампа');

lamp.showStatus(); // Настольная лампа: выключена

lamp.turnOn();
lamp.showStatus(); // Настольная лампа: включена

lamp.toggle();

lamp.showStatus(); // Настольная лампа: выключена
lamp.toggle();
lamp.showStatus(); // Настольная лампа: включена

lamp.turnOff();
lamp.showStatus(); // Настольная лампа: выключена