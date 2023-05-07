import "./App.css";
import MainContainer from "./MainContainer";
import Form from "./Form";
import TableContainer from "./TableContainer";
import Table from "./Table";
import { useState } from "react";
import ActualDate from "./ActualDate";
import { currencies } from "./currencies";
import { row1, row2, row3, row4, row5 } from "./tableRows";

function App() {
  const [exchangeRate, setExchangeRate] = useState("");
  const [tableDataFrom, settableDataFrom] = useState("");
  const [tableDataTo, settableDataTo] = useState("");
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [tdItems, settdItems] = useState([]);
  const [classNametableDataFrom, setClassNametableDataFrom] = useState("");
  const [classNametableDataTo, setClassNametableDataTo] = useState("");
  const [moneyAmount, setMoneyAmount] = useState("");
  const [result, setResult] = useState("");

  const tableBodyRows = [row1, row2, row3, row4, row5];
  const tdArray = [...row1, ...row2, ...row3, ...row4, ...row5];

  const handleTableDataClick = (
    tableDataTarget,
    exchangeRate,
    tableDataFrom,
    tableDataTo
  ) => {
    setExchangeRate(exchangeRate);
    settableDataFrom(tableDataFrom);
    settableDataTo(tableDataTo);
    setSelectedFrom(tableDataFrom);
    setSelectedTo(tableDataTo);
    settdItems((tdItems) => [...tdItems, tableDataTarget]);
    tableDataTarget.classList.add("active");
    setClassNametableDataFrom("active");
    setClassNametableDataTo("active");

    if (tdItems.length === 1) {
      if (tdItems[0] === tableDataTarget) {
        tdItems.shift();
        return;
      }
      tdItems[0].classList.remove("active");
      tdItems.pop();
    }
  };

  const handleSelectCurrencyFromChange = (selectedFrom) => {
    tdItems.forEach((item) => {
      item.classList.remove("active");
      item = null;
    });
    settdItems([]);
    settableDataFrom(selectedFrom);
    setSelectedFrom(selectedFrom);
    let activeTd = tdArray.filter(
      (td) => td.id === selectedFrom + "/" + selectedTo
    );
    if (
      selectedFrom !== "" &&
      selectedTo !== "" &&
      selectedFrom !== selectedTo
    ) {
      setExchangeRate(activeTd[0].exchangeRate);
    }
    if (
      selectedFrom === selectedTo &&
      selectedFrom !== "" &&
      selectedTo !== ""
    ) {
      setExchangeRate("1");
    }

    if (selectedFrom === "") {
      setClassNametableDataFrom("");
    }

    if (selectedFrom !== "") {
      setClassNametableDataFrom("active");
      settdItems([]);
    }
  };

  const handleSelectCurrencyToChange = (selectedTo) => {
    tdItems.forEach((item) => {
      item.classList.remove("active");
      item = null;
    });

    settdItems([]);
    settableDataTo(selectedTo);
    setSelectedTo(selectedTo);
    let activeTd = tdArray.filter(
      (tableData) => tableData.id === selectedFrom + "/" + selectedTo
    );

    if (
      selectedFrom !== "" &&
      selectedTo !== "" &&
      selectedFrom !== selectedTo
    ) {
      setExchangeRate(activeTd[0].exchangeRate);
    }
    if (
      selectedFrom === selectedTo &&
      selectedFrom !== "" &&
      selectedTo !== ""
    ) {
      setExchangeRate("1");
    }

    if (selectedTo === "") {
      setClassNametableDataTo("");
    }

    if (selectedTo !== "") {
      setClassNametableDataTo("active");
      settdItems([]);
    }
  };

  const handleInputMoneyChange = (moneyAmount) => {
    setMoneyAmount(moneyAmount);
  };

  const calculateResult = (e) => {
    e.preventDefault();
    const calculation = `Za ${moneyAmount} ${tableDataFrom} kupisz ${(
      moneyAmount * exchangeRate
    ).toFixed(2)} ${tableDataTo}`;
    setResult(calculation);
  };

  const resetCalculator = () => {
    setMoneyAmount("");
    settableDataFrom("");
    settableDataTo("");
    setSelectedFrom("");
    setSelectedTo("");
    setClassNametableDataFrom("");
    setClassNametableDataTo("");
    setExchangeRate("");
    setResult("");
  };

  return (
    <div className="App">
      <MainContainer>
        <ActualDate />
        <Form
          exchangeRate={exchangeRate}
          tableDataFrom={tableDataFrom}
          tableDataTo={tableDataTo}
          moneyAmount={moneyAmount}
          handleSelectCurrencyFromChange={handleSelectCurrencyFromChange}
          handleSelectCurrencyToChange={handleSelectCurrencyToChange}
          handleInputMoneyChange={handleInputMoneyChange}
          calculateResult={calculateResult}
          selectedFrom={selectedFrom}
          selectedTo={selectedTo}
          classNametableDataFrom={classNametableDataFrom}
          classNametableDataTo={classNametableDataTo}
          currencies={currencies}
          result={result}
          resetCalculator={resetCalculator}
        />
        <TableContainer>
          <Table
            handleTableDataClick={handleTableDataClick}
            exchangeRate={exchangeRate}
            tableDataFrom={tableDataFrom}
            tableDataTo={tableDataTo}
            selectedFrom={selectedFrom}
            selectedTo={selectedTo}
            tableBodyRows={tableBodyRows}
          />
        </TableContainer>
      </MainContainer>
    </div>
  );
}

export default App;
