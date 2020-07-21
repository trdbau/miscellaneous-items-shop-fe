export default function formatCurrency(price, currency = 'USD') {
  const options = { style: 'currency', currency };

  return new Intl.NumberFormat('de-DE', options).format(price);
}
