import "./style.css";

const TableBodyRowItem = ({ item, index }) => {
  return (
    <>
      <td key={index} className="table__cell">
        {item.currencyPair}
      </td>
      <td key={index} className="table__cell">
        {item.exchangeRate}
      </td>
    </>
  );
};

export default TableBodyRowItem;
