import TableBodyRowItem from "../TableBodyRowItem";

const TableBodyRow = ({ index }) => {
  const row1 = [
    { currencyPair: "EUR/PLN", exchangeRate: 4.6797, id: "EUR/PLN" },
    { currencyPair: "USD/PLN", exchangeRate: 4.4521, id: "USD/PLN" },
    { currencyPair: "GBP/PLN", exchangeRate: 5.2964, id: "GBP/PLN" },
    { currencyPair: "CHF/PLN", exchangeRate: 4.7515, id: "CHF/PLN" },
  ];

  const row2 = [
    { currencyPair: "EUR/USD", exchangeRate: 1.0521, id: "EUR/USD" },
    { currencyPair: "PLN/USD", exchangeRate: 0.22, id: "EUR/USD" },
    { currencyPair: "GBP/USD", exchangeRate: 1.1911, id: "EUR/USD" },
    { currencyPair: "CHF/USD", exchangeRate: 1.0701, id: "EUR/USD" },
  ];

  const row3 = [
    { currencyPair: "USD/EUR", exchangeRate: 0.9512, id: "EUR/EUR" },
    { currencyPair: "PLN/EUR", exchangeRate: 0.2112, id: "EUR/EUR" },
    { currencyPair: "GBP/EUR", exchangeRate: 1.1334, id: "EUR/EUR" },
    { currencyPair: "CHF/EUR", exchangeRate: 1.0148, id: "EUR/EUR" },
  ];

  const row4 = [
    { currencyPair: "USD/GBP", exchangeRate: 0.8356, id: "EUR/GBP" },
    { currencyPair: "PLN/GBP", exchangeRate: 0.1886, id: "EUR/GBP" },
    { currencyPair: "EUR/GBP", exchangeRate: 0.8802, id: "EUR/GBP" },
    { currencyPair: "CHF/GBP", exchangeRate: 0.8941, id: "EUR/GBP" },
  ];

  const row5 = [
    { currencyPair: "USD/CHF", exchangeRate: 0.9279, id: "EUR/CHF" },
    { currencyPair: "PLN/CHF", exchangeRate: 0.2134, id: "EUR/CHF" },
    { currencyPair: "EUR/CHF", exchangeRate: 0.9935, id: "EUR/CHF" },
    { currencyPair: "GBP/CHF", exchangeRate: 1.1143, id: "EUR/CHF" },
  ];

  const tableBodyRows = [row1, row2, row3, row4, row5];

  const tableBodyRowJsx = [];

  tableBodyRows[index].forEach((item, index) => {
    tableBodyRowJsx.push(<TableBodyRowItem item={item} index={index} />);
  });

  return <tr>{tableBodyRowJsx}</tr>;
};

export default TableBodyRow;
