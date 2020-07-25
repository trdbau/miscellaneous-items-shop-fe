export default function formatCurrency(price, currency = 'VND') {
  const options = { style: 'currency', currency };

  return new Intl.NumberFormat('vi-VN', options).format(price);
}
