import "./style.css";
import Currencies from "../Currencies";

const Select = ({ id }) => {
  return (
    <select className="select" required name="waluta" id={id}>
      {<Currencies />}
    </select>
  );
};

export default Select;
