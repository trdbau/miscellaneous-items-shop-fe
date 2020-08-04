export default function formatCurrency(price = 0, currency = 'VND') {
  const options = { style: 'currency', currency };

  return new Intl.NumberFormat('vi-VN', options).format(price);
}
