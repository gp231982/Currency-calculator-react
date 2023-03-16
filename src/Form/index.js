import "./style.css";
import Button from "../Button";

const Form = ({ children }) => (
  <form className="form" action="">
    <fieldset className="form__fieldset">
      <legend>
        <h2 className="form__header">Kalkulator walut</h2>
      </legend>
      <h3>Wymagana pola zazanczone są z "*"</h3>
      {children}
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
    </fieldset>
  </form>
);

export default Form;
