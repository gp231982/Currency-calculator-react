import { Item, Span } from "./styled";

const InputListItem = ({ spanText, input }) => (
  <Item>
    <label>
      <Span>{spanText}</Span>
      {input}
    </label>
  </Item>
);

export default InputListItem;
