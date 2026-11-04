/*
Задача 12. Список покупок

Создай класс ShoppingList.

Требования:
- Конструктор создаёт пустой массив товаров.
- Метод addItem(name) добавляет товар.
- Метод removeItem(name) удаляет товар по названию.
- Метод hasItem(name) возвращает true или false.
- Метод showItems() выводит все товары с их порядковыми номерами.
- Один и тот же товар нельзя добавить дважды.

Проверь класс: добавь несколько товаров, удали один и выведи список.
*/

class ShoppingList {
    constructor () {
			this.shoppingList = [];
    }

		hasItem(name) {
			return this.shoppingList.includes(name);
		}

	addItem(name) {
		if (!this.hasItem(name)) {
			this.shoppingList.push(name)
		}
	}

	removeItem(name) {
		if (this.hasItem(name)) {
			this.shoppingList.splice(this.shoppingList.indexOf(name), 1)
		}
	}

	showItems() {
		this.shoppingList.forEach((item, index) => {
			console.log(`Товар с номером ${index + 1}, название: ${item}`)
		})
	}

	getItemCount() {
		return this.shoppingList.length ;
	}
}

const list = new ShoppingList();

list.addItem("Молоко");
list.addItem("Хлеб");
list.addItem("Яйца");
list.addItem("Молоко");

console.log("После добавления:");
list.showItems();

console.log("Есть хлеб:", list.hasItem("Хлеб"));
console.log("Есть сыр:", list.hasItem("Сыр"));

list.removeItem("Хлеб");
list.removeItem("Телевизор");

console.log("После удаления:");
list.showItems();

console.log(list.getItemCount())