import InputListItem from "../InputListItem";
import SelectListItem from "../SelectListItem";
import Input from "../Input";
import Select from "../Select";
import { List } from "./styled";

const FormItemsList = ({
  handleSelectCurrencyFromChange,
  handleSelectCurrencyToChange,
  handleInputMoneyChange,
  selectedFrom,
  selectedTo,
  exchangeRate,
  tableDataFrom,
  tableDataTo,
  classNametableDataFrom,
  classNametableDataTo,
  currencies,
  moneyAmount,
}) => (
  <List className="formItemsList__ul">
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
          tableDataFrom={tableDataFrom}
          tableDataTo={tableDataTo}
          id={"currencyFrom"}
          handleSelectCurrencyFromChange={handleSelectCurrencyFromChange}
          selectedFrom={selectedFrom}
          classNametableDataFrom={classNametableDataFrom}
          classNametableDataTo={classNametableDataTo}
          currencies={currencies}
        />
      }
      tableDataFrom={tableDataFrom}
      tableDataTo={tableDataTo}
    />
    <SelectListItem
      labelText={"currencyTo"}
      spanText={"Przelicz na:*"}
      select={
        <Select
          exchangeRate={exchangeRate}
          tableDataFrom={tableDataFrom}
          tableDataTo={tableDataTo}
          id={"currencyTo"}
          handleSelectCurrencyToChange={handleSelectCurrencyToChange}
          selectedTo={selectedTo}
          classNametableDataFrom={classNametableDataFrom}
          classNametableDataTo={classNametableDataTo}
          currencies={currencies}
        />
      }
      tableDataFrom={tableDataFrom}
      tableDataTo={tableDataTo}
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
  </List>
);

export default FormItemsList;
