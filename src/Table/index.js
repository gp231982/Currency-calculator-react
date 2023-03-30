import "./style.css";
import TableHeader from "../TableHeader";
import TableCaption from "../TableCaption";
import TableBody from "../TableBody";

const Table = ({
  tableBodyRows,
  tdItems,
  exchangeRate,
  changeFormValues,
  selectFrom,
  selectTo,
  selectedFrom,
  selectedTo,
  active,
}) => (
  <table className="table">
    <TableCaption />
    <TableHeader />
    <TableBody
      changeFormValues={changeFormValues}
      exchangeRate={exchangeRate}
      selectFrom={selectFrom}
      selectTo={selectTo}
      selectedFrom={selectedFrom}
      selectedTo={selectedTo}
      active={active}
      tdItems={tdItems}
      tableBodyRows={tableBodyRows}
    />
  </table>
);

export default Table;
