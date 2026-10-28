const purchases = [
  { category: 'Еда', amount: 1200 },
  { category: 'Транспорт', amount: 500 },
  { category: 'Еда', amount: 800 },
  { category: 'Развлечения', amount: 1500 },
  { category: 'Транспорт', amount: 400 },
];

const result = purchases.reduce((res, purchase) => {
  res[purchase.category] =
    (res[purchase.category] || 0) + purchase.amount;

  return res;
}, {});

console.log(result);