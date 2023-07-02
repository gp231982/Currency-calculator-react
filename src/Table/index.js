import TableHeader from "../TableHeader";
import TableCaption from "../TableCaption";
import TableBody from "../TableBody";
import { CurrenciesAndRatesTable } from "./styled";

const Table = ({
  tableBodyRows,
  exchangeRate,
  handleTableDataClick,
  tableDataFrom,
  tableDataTo,
  selectedFrom,
  selectedTo,
}) => (
  <CurrenciesAndRatesTable>
    <TableCaption/>
    <TableHeader />
    <TableBody
      handleTableDataClick={handleTableDataClick}
      exchangeRate={exchangeRate}
      tableDataFrom={tableDataFrom}
      tableDataTo={tableDataTo}
      selectedFrom={selectedFrom}
      selectedTo={selectedTo}
      tableBodyRows={tableBodyRows}
    />
  </CurrenciesAndRatesTable>
);

export default Table;
