import "./style.css";
import Button from "../Button";
import FieldSet from "../FieldSet";
import FormItemsList from "../FormItemsList";

const Form = () => (
  <form className="form">
    <FieldSet>
      <FormItemsList />
      {
        <Button
          type="submit"
          className="form__calculationButton form__calculationButton--disabled"
          textContent="Oblicz"
        />
      }
      <p className="form__result">Wynik:</p>
      {
        <Button
          type="reset"
          className="form__resetButton"
          textContent="Reset"
        />
      }
    </FieldSet>
  </form>
);

export default Form;
