class Product {
  constructor(name, price) {
    this.productName = name;
    this.productPrice = price;
  }

  showInfo() {
    console.log(`Товар: ${this.productName}, цена: ${this.productPrice}`)
  }

  changePrice(value) {
    this.productPrice = value;
  }

  applyDiscount(value) {
    let discount = this.productPrice * value / 100;
    this.changePrice(this.productPrice - discount)
  }

}

const product = new Product('Телефон', 1000);

product.showInfo();
product.changePrice(1200);
product.showInfo();
product.applyDiscount(10);
product.showInfo();
