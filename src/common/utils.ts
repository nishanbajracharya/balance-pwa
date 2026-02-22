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

export async function copyToClipboard(text: string) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  } else {
    // Fallback for older browsers
    const textField = document.createElement('textarea');
    textField.value = text;
    textField.style.position = 'fixed'; // prevent scrolling
    document.body.appendChild(textField);
    textField.select();
    try {
      document.execCommand('copy'); // deprecated, fallback only
      console.log('Copied to clipboard (fallback)');
    } catch (err) {
      console.error('Fallback copy failed', err);
    }
    document.body.removeChild(textField);
  }
}

export function encode<T = any>(data: T): string {
  return btoa(JSON.stringify(data));
}

export function decode<T = any>(data: string): T {
  return JSON.parse(atob(data));
}
