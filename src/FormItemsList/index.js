import InputListItem from "../InputListItem";
import SelectListItem from "../SelectListItem";
import Input from "../Input";
import Select from "../Select";
import "./style.css";

const FormItemsList = () => (
  <ul className="formItemsList__ul">
    <InputListItem
      labelText={"money"}
      spanText={"Wpisz kwotę*"}
      input={
        <Input
          value={""}
          id={"money"}
          type={"number"}
          min={"1"}
          step={"1"}
          placeholder={"Wpisz kwotę"}
          autofocus={true}
        />
      }
    />
    <SelectListItem
      labelText={"currencyFrom"}
      spanText={"Przelicz z:*"}
      select={<Select id={"currencyFrom"} />}
    />
    <SelectListItem
      labelText={"currencyTo"}
      spanText={"Przelicz na:*"}
      select={<Select id={"currencyTo"} />}
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
        />
      }
    />
  </ul>
);

export default FormItemsList;
