import "./style.css";

const SelectListItem = ({ spanText, select }) => (
  <li className="selectListItem">
    <label>
      <span className="selectListItem__labelText">{spanText}</span>
      {select}
    </label>
  </li>
);

export default SelectListItem;
