import TableHeaderItem from "../TableHeaderItem";

const TableHeader = () => {
  const fourHeaders = Array.from({ length: 4 }, (_, index) => {
    return <TableHeaderItem key={index} />;
  });

  return (
    <thead>
      <tr>{fourHeaders}</tr>
    </thead>
  );
};

export default TableHeader;
