import "./style.css";

const InputListItem = ({ labelText, spanText, input }) => (
  <li className="inputListItem">
    <label for={labelText}>
      <span className="inputListItem__labelText">{spanText}</span>
      {input}
    </label>
  </li>
);

export default InputListItem;
