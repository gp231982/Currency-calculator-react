import "./style.css";
import Button from "../Button";
import FieldSet from "../FieldSet";
import FormItemsList from "../FormItemsList";

const Form = ({
  handleSelectCurrencyFromChange,
  handleSelectCurrencyToChange,
  handleInputMoneyChange,
  calculateResult,
  exchangeRate,
  tableDataFrom,
  tableDataTo,
  selectedFrom,
  selectedTo,
  active,
  classNametableDataFrom,
  classNametableDataTo,
  currencies,
  moneyAmount,
  result,
  resetCalculator,
}) => (
  <form className="form">
    <FieldSet>
      <FormItemsList
        exchangeRate={exchangeRate}
        tableDataFrom={tableDataFrom}
        tableDataTo={tableDataTo}
        handleSelectCurrencyFromChange={handleSelectCurrencyFromChange}
        handleSelectCurrencyToChange={handleSelectCurrencyToChange}
        handleInputMoneyChange={handleInputMoneyChange}
        selectedFrom={selectedFrom}
        selectedTo={selectedTo}
        active={active}
        classNametableDataFrom={classNametableDataFrom}
        classNametableDataTo={classNametableDataTo}
        currencies={currencies}
        moneyAmount={moneyAmount}
        calculateResult={calculateResult}
      />
      {
        <Button
          calculateResult={calculateResult}
          result={result}
          type="submit"
          className={`form__calculationButton ${
            (moneyAmount && tableDataFrom && tableDataTo && exchangeRate) !== ""
              ? ""
              : "form__calculationButton--disabled"
          }`}
          textContent="Oblicz"
        />
      }
      <p className="form__result">Wynik: {result}</p>
      {
        <Button
          resetCalculator={resetCalculator}
          type="reset"
          className="form__resetButton"
          textContent="Reset"
        />
      }
    </FieldSet>
  </form>
);

export default Form;
