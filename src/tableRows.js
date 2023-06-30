const row1 = [
  { currencyPair: "EUR/PLN", exchangeRate: "loadingData...", id: "EUR/PLN" },
  { currencyPair: "USD/PLN", exchangeRate: "loadingData...", id: "USD/PLN" },
  { currencyPair: "GBP/PLN", exchangeRate: "loadingData...", id: "GBP/PLN" },
  { currencyPair: "CHF/PLN", exchangeRate: "loadingData...", id: "CHF/PLN" },
];

const row2 = [
  { currencyPair: "EUR/USD", exchangeRate: "loadingData...", id: "EUR/USD" },
  { currencyPair: "PLN/USD", exchangeRate: "loadingData...", id: "PLN/USD" },
  { currencyPair: "GBP/USD", exchangeRate: "loadingData...", id: "GBP/USD" },
  { currencyPair: "CHF/USD", exchangeRate: "loadingData...", id: "CHF/USD" },
];

const row3 = [
  { currencyPair: "USD/EUR", exchangeRate: "loadingData...", id: "USD/EUR" },
  { currencyPair: "PLN/EUR", exchangeRate: "loadingData...", id: "PLN/EUR" },
  { currencyPair: "GBP/EUR", exchangeRate: "loadingData...", id: "GBP/EUR" },
  { currencyPair: "CHF/EUR", exchangeRate: "loadingData...", id: "CHF/EUR" },
];

const row4 = [
  { currencyPair: "USD/GBP", exchangeRate: "loadingData...", id: "USD/GBP" },
  { currencyPair: "PLN/GBP", exchangeRate: "loadingData...", id: "PLN/GBP" },
  { currencyPair: "EUR/GBP", exchangeRate: "loadingData...", id: "EUR/GBP" },
  { currencyPair: "CHF/GBP", exchangeRate: "loadingData...", id: "CHF/GBP" },
];

const row5 = [
  { currencyPair: "USD/CHF", exchangeRate: "loadingData...", id: "USD/CHF" },
  { currencyPair: "PLN/CHF", exchangeRate: "loadingData...", id: "PLN/CHF" },
  { currencyPair: "EUR/CHF", exchangeRate: "loadingData...", id: "EUR/CHF" },
  { currencyPair: "GBP/CHF", exchangeRate: "loadingData...", id: "GBP/CHF" },
];

let item = { i: 1, j: 2, k: 3 };
console.log(item);
console.log({...item});

export { row1, row2, row3, row4, row5 };
