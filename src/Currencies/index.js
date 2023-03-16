const Currencies = () => {
  const currencies = [
    { currency: "", label: "--Wybierz opcję--", id: 1 },
    { currency: "PLN", label: "Polski złoty: PLN", id: 2 },
    { currency: "USD", label: "Dolar amerykański: USD", id: 3 },
    { currency: "EUR", label: "Euro: EUR", id: 4 },
    { currency: "GBP", label: "Funt brytyjski: GBP", id: 5 },
    { currency: "CHF", label: "Frank Szwarjcarski: CHF", id: 5 },
  ];

  return currencies.map((currency) => (
    <option id={currency.id} value={currency.currency}>
      {currency.label}
    </option>
  ));
};

export default Currencies;
