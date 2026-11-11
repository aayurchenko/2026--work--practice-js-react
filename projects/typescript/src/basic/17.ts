// Задача 16. Реализация интерфейса классом через implements.

interface Printable {
  print(): string;
}

class Invoice implements Printable {
  public readonly id: number;
  public total: number;

  constructor(id: number, total: number) {
    this.id = id;
    this.total = total;
  }

  print():string {
    return `Счёт №${this.id}: ${this.total}₽`
  } 
}
const invoice = new Invoice(15, 5000);

console.log(invoice.print()); // "Счёт №15: 5000₽"