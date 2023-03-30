import "./style.css";
import Button from "../Button";
import FieldSet from "../FieldSet";
import FormItemsList from "../FormItemsList";

const Form = ({
  handleSelectCurrencyFromChange,
  handleSelectCurrencyToChange,
  handleInputMoneyChange,
  changeFormValues,
  calculateResult,
  exchangeRate,
  selectFrom,
  selectTo,
  selectedFrom,
  selectedTo,
  active,
  classNameSelectFrom,
  classNameSelectTo,
  currencies,
  moneyAmount,
  result,
  resetCalculator,
}) => (
  <form className="form">
    <FieldSet>
      <FormItemsList
        changeFormValues={changeFormValues}
        exchangeRate={exchangeRate}
        selectFrom={selectFrom}
        selectTo={selectTo}
        handleSelectCurrencyFromChange={handleSelectCurrencyFromChange}
        handleSelectCurrencyToChange={handleSelectCurrencyToChange}
        handleInputMoneyChange={handleInputMoneyChange}
        selectedFrom={selectedFrom}
        selectedTo={selectedTo}
        active={active}
        classNameSelectFrom={classNameSelectFrom}
        classNameSelectTo={classNameSelectTo}
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
            (moneyAmount && selectFrom && selectTo && exchangeRate) !== ""
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
