const Currencies = ({ currencies }) => {
  return currencies.map((currency) => (
    <option key={currency.id} value={currency.value}>
      {currency.label}
    </option>
  ));
};

export default Currencies;
