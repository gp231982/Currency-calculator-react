import "./style.css";
import CurrencyOptions from "../CurrencyOptions";

const Select = ({
  handleSelectCurrencyFromChange,
  handleSelectCurrencyToChange,
  selectedFrom,
  selectedTo,
  id,
  tableDataFrom,
  tableDataTo,
  classNametableDataFrom,
  classNametableDataTo,
  currencies,
}) => {
  return (
    <select
      value={id === "currencyFrom" ? selectedFrom : selectedTo}
      className={`select ${
        id === "currencyFrom"
          ? classNametableDataFrom
          : id === "currencyTo"
          ? classNametableDataTo
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
        <CurrencyOptions
          id={id}
          tableDataFrom={tableDataFrom}
          tableDataTo={tableDataTo}
          currencies={currencies}
        />
      }
    </select>
  );
};

export default Select;
