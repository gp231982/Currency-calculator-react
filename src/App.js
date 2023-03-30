import "./App.css";
import MainContainer from "./MainContainer";
import Form from "./Form";
import TableContainer from "./TableContainer";
import Table from "./Table";
import { useState } from "react";

function App() {
  const [exchangeRate, setExchangeRate] = useState("");
  const [selectFrom, setSelectFrom] = useState("");
  const [selectTo, setSelectTo] = useState("");
  const [active, setActive] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [tdItems, settdItems] = useState([]);
  const [classNameSelectFrom, setClassNameSelectFrom] = useState("");
  const [classNameSelectTo, setClassNameSelectTo] = useState("");
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

  const changeFormValues = (
    target,
    exchangeRate,
    selectFrom,
    selectTo,
    item
  ) => {
    setExchangeRate(exchangeRate);
    setSelectFrom(selectFrom);
    setSelectTo(selectTo);
    setSelectedFrom(selectFrom);
    setSelectedTo(selectTo);
    setActive((active) => true);
    settdItems((tdItems) => [...tdItems, target]);
    target.classList.add("active");
    setClassNameSelectFrom("active");
    setClassNameSelectTo("active");

    if (tdItems.length === 1) {
      if (tdItems[0] === target) {
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
    settdItems((tdItems) => []);
    setSelectFrom(selectedFrom);
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
      setActive((active) => false);
      setClassNameSelectFrom("");
    }

    if (selectedFrom !== "") {
      setActive((active) => true);
      setClassNameSelectFrom("active");
      settdItems((tdItems) => []);
    }
  };

  const handleSelectCurrencyToChange = (selectedTo) => {
    tdItems.forEach((item) => {
      item.classList.remove("active");
      item = null;
    });

    settdItems((tdItems) => []);
    setSelectTo(selectedTo);
    setSelectedTo(selectedTo);
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

    if (selectedTo === "") {
      setActive((active) => false);
      setClassNameSelectTo("");
    }
    if (selectedTo !== "") {
      setClassNameSelectTo("active");
      setActive((active) => true);
      settdItems((tdItems) => []);
    }
  };

  const handleInputMoneyChange = (moneyAmount) => {
    setMoneyAmount(moneyAmount);
  };

  const calculateResult = (e) => {
    e.preventDefault();
    const calculation = `Za ${moneyAmount} ${selectFrom} kupisz ${(
      moneyAmount * exchangeRate
    ).toFixed(2)} ${selectTo}`;
    setResult(calculation);
  };

  const resetCalculator = () => {
    setMoneyAmount("");
    setSelectFrom("");
    setSelectTo("");
    setSelectedFrom("");
    setSelectedTo("");
    setClassNameSelectFrom("");
    setClassNameSelectTo("");
    setExchangeRate("");
    setResult("");
  };

  return (
    <div className="App">
      <MainContainer>
        <Form
          changeFormValues={changeFormValues}
          exchangeRate={exchangeRate}
          selectFrom={selectFrom}
          selectTo={selectTo}
          moneyAmount={moneyAmount}
          handleSelectCurrencyFromChange={handleSelectCurrencyFromChange}
          handleSelectCurrencyToChange={handleSelectCurrencyToChange}
          handleInputMoneyChange={handleInputMoneyChange}
          calculateResult={calculateResult}
          selectedFrom={selectedFrom}
          selectedTo={selectedTo}
          active={active}
          classNameSelectFrom={classNameSelectFrom}
          classNameSelectTo={classNameSelectTo}
          currencies={currencies}
          result={result}
          resetCalculator={resetCalculator}
        />
        <TableContainer>
          <Table
            changeFormValues={changeFormValues}
            exchangeRate={exchangeRate}
            selectFrom={selectFrom}
            selectTo={selectTo}
            selectedFrom={selectedFrom}
            selectedTo={selectedTo}
            active={active}
            tdItems={tdItems}
            tableBodyRows={tableBodyRows}
          />
        </TableContainer>
      </MainContainer>
    </div>
  );
}

export default App;
