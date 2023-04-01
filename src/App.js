import "./App.css";
import MainContainer from "./MainContainer";
import Form from "./Form";
import TableContainer from "./TableContainer";
import Table from "./Table";
import { useState } from "react";

function App() {
  const [exchangeRate, setExchangeRate] = useState("");
  const [tableDataFrom, settableDataFrom] = useState("");
  const [tableDataTo, settableDataTo] = useState("");
  const [active, setActive] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [tdItems, settdItems] = useState([]);
  const [classNametableDataFrom, setClassNametableDataFrom] = useState("");
  const [classNametableDataTo, setClassNametableDataTo] = useState("");
  const [moneyAmount, setMoneyAmount] = useState("");
  const [result, setResult] = useState("");

  const currencies = [
    { value: "", label: "--Wybierz opcję--", id: 1 },
    { value: "PLN", label: "Polski złoty: PLN", id: 2 },
    { value: "USD", label: "Dolar amerykański: USD", id: 3 },
    { value: "EUR", label: "Euro: EUR", id: 4 },
    { value: "GBP", label: "Funt brytyjski: GBP", id: 5 },
    { value: "CHF", label: "Frank Szwarjcarski: CHF", id: 6 },
  ];

  const row1 = [
    { currencyPair: "EUR/PLN", exchangeRate: 4.6797, id: "EUR/PLN" },
    { currencyPair: "USD/PLN", exchangeRate: 4.4521, id: "USD/PLN" },
    { currencyPair: "GBP/PLN", exchangeRate: 5.2964, id: "GBP/PLN" },
    { currencyPair: "CHF/PLN", exchangeRate: 4.7515, id: "CHF/PLN" },
  ];

  const row2 = [
    { currencyPair: "EUR/USD", exchangeRate: 1.0521, id: "EUR/USD" },
    { currencyPair: "PLN/USD", exchangeRate: 0.2201, id: "PLN/USD" },
    { currencyPair: "GBP/USD", exchangeRate: 1.1911, id: "GBP/USD" },
    { currencyPair: "CHF/USD", exchangeRate: 1.0701, id: "CHF/USD" },
  ];

  const row3 = [
    { currencyPair: "USD/EUR", exchangeRate: 0.9512, id: "USD/EUR" },
    { currencyPair: "PLN/EUR", exchangeRate: 0.2112, id: "PLN/EUR" },
    { currencyPair: "GBP/EUR", exchangeRate: 1.1334, id: "GBP/EUR" },
    { currencyPair: "CHF/EUR", exchangeRate: 1.0148, id: "CHF/EUR" },
  ];

  const row4 = [
    { currencyPair: "USD/GBP", exchangeRate: 0.8356, id: "USD/GBP" },
    { currencyPair: "PLN/GBP", exchangeRate: 0.1886, id: "PLN/GBP" },
    { currencyPair: "EUR/GBP", exchangeRate: 0.8802, id: "EUR/GBP" },
    { currencyPair: "CHF/GBP", exchangeRate: 0.8941, id: "CHF/GBP" },
  ];

  const row5 = [
    { currencyPair: "USD/CHF", exchangeRate: 0.9279, id: "USD/CHF" },
    { currencyPair: "PLN/CHF", exchangeRate: 0.2134, id: "PLN/CHF" },
    { currencyPair: "EUR/CHF", exchangeRate: 0.9935, id: "EUR/CHF" },
    { currencyPair: "GBP/CHF", exchangeRate: 1.1143, id: "GBP/CHF" },
  ];

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
    setActive(true);
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
      setActive(false);
      setClassNametableDataFrom("");
    }

    if (selectedFrom !== "") {
      setActive(true);
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
      setActive(false);
      setClassNametableDataTo("");
    }

    if (selectedTo !== "") {
      setClassNametableDataTo("active");
      setActive(true);
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
          active={active}
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
            active={active}
            tableBodyRows={tableBodyRows}
          />
        </TableContainer>
      </MainContainer>
    </div>
  );
}

export default App;
