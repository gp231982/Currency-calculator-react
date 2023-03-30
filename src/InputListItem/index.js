import "./style.css";

const InputListItem = ({ spanText, input }) => (
  <li className="inputListItem">
    <label>
      <span className="inputListItem__labelText">{spanText}</span>
      {input}
    </label>
  </li>
);

export default InputListItem;
