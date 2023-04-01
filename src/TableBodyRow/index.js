import TableBodyRowItem from "../TableBodyRowItem";

const TableBodyRow = ({
  index,
  exchangeRate,
  changeFormValues,
  tableDataFrom,
  tableDataTo,
  selectedFrom,
  selectedTo,
  active,
  tdItems,
  tableBodyRows,
}) => {
  const tableBodyRowJsx = [];

  tableBodyRows[index].forEach((item, index, id) => {
    tableBodyRowJsx.push(
      <TableBodyRowItem
        changeFormValues={changeFormValues}
        exchangeRate={exchangeRate}
        tableDataFrom={tableDataFrom}
        tableDataTo={tableDataTo}
        selectedFrom={selectedFrom}
        selectedTo={selectedTo}
        item={item}
        index={index}
        id={id}
        key={index}
        active={active}
        tdItems={tdItems}
      />
    );
  });

  return <tr>{tableBodyRowJsx}</tr>;
};

export default TableBodyRow;
