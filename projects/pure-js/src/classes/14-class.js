class Temperature {
  constructor(celsius) {

    if (celsius >= -273.15 && Number.isFinite(celsius)){ 
      this._celsius = celsius;
    } else {this._celsius = 0};
  
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (value >= -273.15 && Number.isFinite(value)) {
      this._celsius = value;
    }
  }

  get fahrenheit() {
    return this._celsius * 9 / 5 + 32;
  }

  set fahrenheit(value) {
    if (Number.isFinite(value)) {
      this.celsius = (value - 32) * 5 / 9;
    }
  }

  showInfo() {
    console.log(this.celsius)
    console.log(this.fahrenheit)
  }

}

const temp = new Temperature(25);

temp.fahrenheit = 212;
console.log(temp.celsius); // 100

temp.fahrenheit = -40;
console.log(temp.celsius); // -40

temp.fahrenheit = "32";
console.log(temp.celsius); // -40

temp.fahrenheit = -500;
console.log(temp.celsius); // -40