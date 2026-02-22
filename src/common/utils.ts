export function formatMoney(value: number) {
  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatMoneyWithSymbol(value: number, currencySymbol = 'Rs') {
  return `${currencySymbol} ${formatMoney(value)}`;
}
