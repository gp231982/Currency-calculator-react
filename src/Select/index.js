import CurrencyOptions from "../CurrencyOptions";
import { MoneyInput } from "../Input/styled";

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
    <MoneyInput
      as="select"
      style={{ cursor: "pointer" }}
      value={id === "currencyFrom" ? selectedFrom : selectedTo}
      className={
        id === "currencyFrom"
          ? classNametableDataFrom
          : id === "currencyTo"
          ? classNametableDataTo
          : ""
      }
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
    </MoneyInput>
  );
};

export default Select;
