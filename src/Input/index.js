import { MoneyInput } from "./styled.js";

const Input = ({
  id,
  type,
  min,
  step,
  placeholder,
  autofocus,
  readonly,
  exchangeRate,
  handleInputMoneyChange,
  moneyAmount,
}) => {
  return (
    <MoneyInput
      className={`input ${
        (id === "currencyRatio" && exchangeRate !== "") ||
        (id === "money" && moneyAmount !== "")
          ? "active"
          : ""
      }`}
      value={`${id === "currencyRatio" ? exchangeRate : moneyAmount}`}
      onChange={(e) => handleInputMoneyChange(e.target.value)}
      id={id}
      type={type}
      min={min}
      step={step}
      placeholder={placeholder}
      required
      autoFocus={autofocus}
      readOnly={readonly}
    />
  );
};

export default Input;
