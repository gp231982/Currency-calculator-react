import "./style.css";
import Currencies from "../Currencies";

const Select = ({
  handleSelectCurrencyFromChange,
  handleSelectCurrencyToChange,
  selectedFrom,
  selectedTo,
  id,
  selectFrom,
  selectTo,
  classNameSelectFrom,
  classNameSelectTo,
  currencies,
}) => {
  return (
    <select
      value={id === "currencyFrom" ? selectedFrom : selectedTo}
      className={`select ${
        id === "currencyFrom"
          ? classNameSelectFrom
          : id === "currencyTo"
          ? classNameSelectTo
          : ""
      }`}
      required
      name="waluta"
      id={id}
      onChange={
        id === "currencyFrom"
          ? (e) => handleSelectCurrencyFromChange(e.target.value)
          : (e) => handleSelectCurrencyToChange(e.target.value)
      }
    >
      {
        <Currencies
          id={id}
          selectFrom={selectFrom}
          selectTo={selectTo}
          currencies={currencies}
        />
      }
    </select>
  );
};

export default Select;
