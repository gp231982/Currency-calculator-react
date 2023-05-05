import { FormFieldSet, FormFieldSetHeader } from "./styled";

const FieldSet = ({ children }) => (
  <FormFieldSet>
    <legend>
      <FormFieldSetHeader>Kalkulator walut</FormFieldSetHeader>
    </legend>
    <h3>Wymagane pola zazanczone są z "*"</h3>
    {children}
  </FormFieldSet>
);

export default FieldSet;
