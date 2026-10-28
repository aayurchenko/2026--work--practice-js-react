const orders = [
  {
    id: 1,
    status: 'completed',
    items: [
      { name: 'Клавиатура', price: 7000, quantity: 1 },
      { name: 'Мышь', price: 2500, quantity: 2 },
    ],
  },
  {
    id: 2,
    status: 'cancelled',
    items: [
      { name: 'Наушники', price: 12000, quantity: 1 },
    ],
  },
  {
    id: 3,
    status: 'completed',
    items: [
      { name: 'Мышь', price: 2500, quantity: 1 },
      { name: 'Монитор', price: 30000, quantity: 1 },
    ],
  },
];


const completedOrders = orders.filter((item) => item.status === 'completed')

const completedItems = completedOrders.flatMap((item) => item.items)

const productStats = completedItems.reduce((res, item) => {
    if(!res[item.name]) {
        res[item.name] = {
            quantity: 0,
            revenue: 0
        }
    }
    res[item.name].quantity += item.quantity;
    res[item.name].revenue += item.quantity * item.price;
    return res;

}, {})

console.log(completedOrders)
console.log(completedItems)
console.log(productStats)