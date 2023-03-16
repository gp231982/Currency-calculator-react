import "./style.css";

const InputListItem = ({ labelText, spanText, input }) => (
  <li className="form__li">
    <label for={labelText}>
      <span className="form__labelText">{spanText}</span>
      {input}
    </label>
  </li>
);

export default InputListItem;
