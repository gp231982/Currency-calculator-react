import InputListItem from "../InputListItem";
import SelectListItem from "../SelectListItem";
import Input from "../Input";
import Select from "../Select";
import "./style.css";

const FormItemsList = ({
  handleSelectCurrencyFromChange,
  handleSelectCurrencyToChange,
  handleInputMoneyChange,
  selectedFrom,
  selectedTo,
  exchangeRate,
  selectFrom,
  selectTo,
  active,
  classNameSelectFrom,
  classNameSelectTo,
  currencies,
  moneyAmount,
}) => (
  <ul className="formItemsList__ul">
    <InputListItem
      labelText={"money"}
      spanText={"Wpisz kwotę*"}
      input={
        <Input
          id={"money"}
          type={"number"}
          min={"1"}
          step={"1"}
          placeholder={"Wpisz kwotę"}
          autofocus={true}
          handleInputMoneyChange={handleInputMoneyChange}
          moneyAmount={moneyAmount}
        />
      }
    />
    <SelectListItem
      labelText={"currencyFrom"}
      spanText={"Przelicz z:*"}
      select={
        <Select
          exchangeRate={exchangeRate}
          selectFrom={selectFrom}
          selectTo={selectTo}
          id={"currencyFrom"}
          handleSelectCurrencyFromChange={handleSelectCurrencyFromChange}
          selectedFrom={selectedFrom}
          active={active}
          classNameSelectFrom={classNameSelectFrom}
          classNameSelectTo={classNameSelectTo}
          currencies={currencies}
        />
      }
      selectFrom={selectFrom}
      selectTo={selectTo}
    />
    <SelectListItem
      labelText={"currencyTo"}
      spanText={"Przelicz na:*"}
      select={
        <Select
          exchangeRate={exchangeRate}
          selectFrom={selectFrom}
          selectTo={selectTo}
          id={"currencyTo"}
          handleSelectCurrencyToChange={handleSelectCurrencyToChange}
          selectedTo={selectedTo}
          active={active}
          classNameSelectFrom={classNameSelectFrom}
          classNameSelectTo={classNameSelectTo}
          currencies={currencies}
        />
      }
      selectFrom={selectFrom}
      selectTo={selectTo}
    />
    <InputListItem
      labelText={"currencyRatio"}
      spanText={"Wybierz aktualny kurs (z tabeli )*"}
      input={
        <Input
          id="currencyRatio"
          type="number"
          min="0.0001"
          step="0.0001"
          placeholder="Wybierz kurs z tabeli kursów walut"
          readonly={true}
          exchangeRate={exchangeRate}
        />
      }
    />
  </ul>
);

export default FormItemsList;
