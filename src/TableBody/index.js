import TableBodyRow from "../TableBodyRow";

const TableBody = ({
  exchangeRate,
  handleTableDataClick,
  tableDataFrom,
  tableDataTo,
  selectedFrom,
  selectedTo,
  tableBodyRows,
}) => (
  <tbody>
    <TableBodyRow
      handleTableDataClick={handleTableDataClick}
      exchangeRate={exchangeRate}
      tableDataFrom={tableDataFrom}
      tableDataTo={tableDataTo}
      selectedFrom={selectedFrom}
      selectedTo={selectedTo}
      index={0}
      tableBodyRows={tableBodyRows}
    />
    <TableBodyRow
      handleTableDataClick={handleTableDataClick}
      exchangeRate={exchangeRate}
      tableDataFrom={tableDataFrom}
      tableDataTo={tableDataTo}
      selectedFrom={selectedFrom}
      selectedTo={selectedTo}
      index={1}
      tableBodyRows={tableBodyRows}
    />
    <TableBodyRow
      handleTableDataClick={handleTableDataClick}
      exchangeRate={exchangeRate}
      tableDataFrom={tableDataFrom}
      tableDataTo={tableDataTo}
      selectedFrom={selectedFrom}
      selectedTo={selectedTo}
      index={2}
      tableBodyRows={tableBodyRows}
    />
    <TableBodyRow
      handleTableDataClick={handleTableDataClick}
      exchangeRate={exchangeRate}
      tableDataFrom={tableDataFrom}
      tableDataTo={tableDataTo}
      selectedFrom={selectedFrom}
      selectedTo={selectedTo}
      index={3}
      tableBodyRows={tableBodyRows}
    />
    <TableBodyRow
      handleTableDataClick={handleTableDataClick}
      exchangeRate={exchangeRate}
      tableDataFrom={tableDataFrom}
      tableDataTo={tableDataTo}
      selectedFrom={selectedFrom}
      selectedTo={selectedTo}
      index={4}
      tableBodyRows={tableBodyRows}
    />
  </tbody>
);

export default TableBody;
