// Задача 8. Литеральные типы и объединение допустимых значений.


type OrderStatus =  'pending' | 'completed' | 'cancelled';


function getStatusMessage(status: OrderStatus): string {

  switch (status) {
    case 'pending':
      return 'Заказ ожидает обработки'
    case 'cancelled':
      return 'Заказ отменен'
    case 'completed':
      return 'Заказ выполнен'
  }
}

console.log(getStatusMessage("pending"));
console.log(getStatusMessage("completed"));
console.log(getStatusMessage("cancelled"));