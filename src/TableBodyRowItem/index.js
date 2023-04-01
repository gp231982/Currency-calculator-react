import "./style.css";

const TableBodyRowItem = ({
  selectedFrom,
  selectedTo,
  item,
  handleTableDataClick,
  active,
}) => {
  return (
    <>
      <td
        id={item.id}
        className={`tableBodyRowItem ${
          item.id === selectedFrom + "/" + selectedTo ? "active" : ""
        }  `}
      >
        {item.currencyPair}
      </td>
      <td
        id={item.id}
        className={`tableBodyRowItem ${
          item.id === selectedFrom + "/" + selectedTo ? "active" : ""
        }  `}
        onClick={(e) => {
          handleTableDataClick(
            e.target,
            item.exchangeRate,
            item.currencyPair.slice(0, 3),
            item.currencyPair.slice(-3),
            item
          );
          active = true;
          if (active === true) {
            active = "active";
          } else {
            active = "";
          }
        }}
      >
        {item.exchangeRate}
      </td>
    </>
  );
};

export default TableBodyRowItem;
