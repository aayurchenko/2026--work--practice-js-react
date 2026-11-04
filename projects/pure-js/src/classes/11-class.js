
/*
Задача 11. Книга

Создай класс Book.

Требования:
- Конструктор принимает title, author и pages.
- Метод showInfo() выводит информацию о книге.
- Метод read(pagesCount) увеличивает количество прочитанных страниц.
- Нельзя прочитать больше страниц, чем есть в книге.
- Метод getProgress() возвращает процент прочитанного.

Пример использования:
const book = new Book('Мастер и Маргарита', 'Михаил Булгаков', 480);
book.read(100);
book.showInfo();
console.log(book.getProgress()); // примерно 21
*/
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readPages = 0;
  }
  
  showInfo() {
    console.log(`Книга ${this.title} написана ${this.author}, в ней ${this.pages} страниц.`);
  }
  
  read(pagesCount) {
    if (pagesCount <= 0) {
      return;
    }
    this.readPages += pagesCount;
    if (this.readPages > this.pages) {
      this.readPages = this.pages;
    }
  }



  getProgress() {
    return Math.round(this.readPages/this.pages * 100);
  }

}

const book = new Book('Мастер и Маргарита', 'Михаил Булгаков', 480);
book.read(100);
book.showInfo();
console.log(book.getProgress()); // примерно 21