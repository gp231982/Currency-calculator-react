import "./style.css";

const SelectListItem = ({ labelText, spanText, select }) => (
  <li className="form__li">
    <label for={labelText}>
      <span className="form__labelText">{spanText}</span>
      {select}
    </label>
  </li>
);

export default SelectListItem;
