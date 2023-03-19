import "./style.css";
import { useState } from "react";

const Input = ({ id, type, min, step, placeholder, autofocus, readonly }) => {
  const [newValue, setNewValue] = useState("");

  return (
    <input
      className="form__field"
      value={newValue}
      onChange={(e) => setNewValue(e.target.value)}
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
