import TableBodyRowItem from "../TableBodyRowItem";

const TableBodyRow = ({
  index,
  exchangeRate,
  handleTableDataClick,
  tableDataFrom,
  tableDataTo,
  selectedFrom,
  selectedTo,
  tableBodyRows,
}) => {
  const tableBodyRowJsx = [];

  tableBodyRows[index].forEach((item, index) => {
    tableBodyRowJsx.push(
      <TableBodyRowItem
        handleTableDataClick={handleTableDataClick}
        exchangeRate={exchangeRate}
        tableDataFrom={tableDataFrom}
        tableDataTo={tableDataTo}
        selectedFrom={selectedFrom}
        selectedTo={selectedTo}
        item={item}
        index={index}
        key={index}
      />
    );
  });

  return <tr>{tableBodyRowJsx}</tr>;
};

export default TableBodyRow;
