export function formatMoney(value: number) {
  const format = Number.isInteger(value)
    ? {}
    : {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      };
  return new Intl.NumberFormat('en-IN', format).format(value);
}

export function formatMoneyWithSymbol(value: number, currencySymbol = 'Rs') {
  return `${currencySymbol} ${formatMoney(value)}`;
}

export function getRandomUUID() {
  return crypto.randomUUID();
}
