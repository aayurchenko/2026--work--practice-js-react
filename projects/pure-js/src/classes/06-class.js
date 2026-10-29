class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  showSize() {
    console.log(`Ширина: ${this.width} и высота: ${this.height}`)
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return (this.width + this.height) * 2;
  }

  resize(width, height) {
    this.height = height;
    this.width = width;
  }
}
const rectangle = new Rectangle(5, 3);

rectangle.showSize();
console.log('Площадь:', rectangle.getArea());
console.log('Периметр:', rectangle.getPerimeter());

rectangle.resize(10, 4);
rectangle.showSize();
console.log('Площадь:', rectangle.getArea());
console.log('Периметр:', rectangle.getPerimeter());