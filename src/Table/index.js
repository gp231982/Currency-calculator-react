import "./style.css";
import TableHeader from "../TableHeader";
import TableCaption from "../TableCaption";
import TableBody from "../TableBody";

const Table = () => (
  <table className="table">
    <TableCaption />
    <TableHeader />
    <TableBody />
  </table>
);

export default Table;
