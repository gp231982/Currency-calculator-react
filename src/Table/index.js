import "./style.css";
import TableHeader from "../TableHeader";
import TableCaption from "../TableCaption";
import TableBody from "../TableBody";

const Table = ({
  tableBodyRows,
  exchangeRate,
  handleTableDataClick,
  tableDataFrom,
  tableDataTo,
  selectedFrom,
  selectedTo,
  active,
}) => (
  <table className="table">
    <TableCaption />
    <TableHeader />
    <TableBody
      handleTableDataClick={handleTableDataClick}
      exchangeRate={exchangeRate}
      tableDataFrom={tableDataFrom}
      tableDataTo={tableDataTo}
      selectedFrom={selectedFrom}
      selectedTo={selectedTo}
      active={active}
      tableBodyRows={tableBodyRows}
    />
  </table>
);

export default Table;
