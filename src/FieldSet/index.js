import "./style.css";

const FieldSet = ({ children }) => (
  <fieldset className="form__fieldset">
    <legend>
      <h2 className="form__header">Kalkulator walut</h2>
    </legend>
    <h3>Wymagane pola zazanczone są z "*"</h3>
    {children}
  </fieldset>
);

export default FieldSet;
