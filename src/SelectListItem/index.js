import { Item, Span } from "./styled";

const SelectListItem = ({ spanText, select }) => (
  <Item>
    <label>
      <Span>{spanText}</Span>
      {select}
    </label>
  </Item>
);

export default SelectListItem;
