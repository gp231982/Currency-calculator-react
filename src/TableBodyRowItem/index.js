import { Item } from "./styled";

const TableBodyRowItem = ({
  selectedFrom,
  selectedTo,
  item,
  handleTableDataClick,
}) => {

  return (
    <>
      <Item id={item.id} selectedId={selectedFrom + "/" + selectedTo}>
        {item.currencyPair}
      </Item>
      <Item
        id={item.id}
        selectedId={selectedFrom + "/" + selectedTo}
        onClick={(e) => {
          handleTableDataClick(
            e.target,
            item.exchangeRate,
            item.currencyPair.slice(0, 3),
            item.currencyPair.slice(-3),
            item
          );
        }}
      >
        {item.exchangeRate}
      </Item>
    </>
  );
};

export default TableBodyRowItem;
