import FieldSet from "../FieldSet";
import FormItemsList from "../FormItemsList";
import { CalcForm, Result, StyledButton } from "./styled";

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
  classNametableDataFrom,
  classNametableDataTo,
  currencies,
  moneyAmount,
  result,
  resetCalculator,
}) => (
  <CalcForm>
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
        classNametableDataFrom={classNametableDataFrom}
        classNametableDataTo={classNametableDataTo}
        currencies={currencies}
        moneyAmount={moneyAmount}
        calculateResult={calculateResult}
      />
      {
        <StyledButton
          calculateResult={calculateResult}
          result={result}
          type="submit"
          disabled={
            (moneyAmount && tableDataFrom && tableDataTo && exchangeRate) === ""
          }
          textContent="Oblicz"
        />
      }
      <Result>Wynik: {result}</Result>
      {
        <StyledButton
          resetCalculator={resetCalculator}
          type="reset"
          textContent="Reset"
        />
      }
    </FieldSet>
  </CalcForm>
);

export default Form;
