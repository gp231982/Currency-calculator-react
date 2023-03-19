import "./style.css";

const SelectListItem = ({ labelText, spanText, select }) => (
  <li className="selectListItem">
    <label for={labelText}>
      <span className="selectListItem__labelText">{spanText}</span>
      {select}
    </label>
  </li>
);

export default SelectListItem;
