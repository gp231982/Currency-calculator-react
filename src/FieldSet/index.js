import "./style.css";

const FieldSet = ({ children }) => (
  <fieldset className="fieldset">
    <legend>
      <h2 className="fieldset__header">Kalkulator walut</h2>
    </legend>
    <h3>Wymagane pola zazanczone są z "*"</h3>
    {children}
  </fieldset>
);

export default FieldSet;
