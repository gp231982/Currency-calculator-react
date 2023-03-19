import "./style.css";

const TableBodyRowItem = ({ item, index }) => {
  return (
    <>
      <td key={index} className="tableBodyRowItem">
        {item.currencyPair}
      </td>
      <td key={index} className="tableBodyRowItem">
        {item.exchangeRate}
      </td>
    </>
  );
};

export default TableBodyRowItem;
