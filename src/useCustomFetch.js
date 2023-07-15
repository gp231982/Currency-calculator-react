import { useEffect, useState } from "react";
import { row1, row2, row3, row4, row5 } from "./tableRows";

const useCustomFetch = () => {
  const [tableBodyRows, setTableBodyRows] = useState([row1, row2, row3, row4, row5]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedDate, setFetchedDate] = useState("");
  const [failure, setFailure] = useState("");

  const baseCurrencies = ["PLN", "USD", "EUR", "GBP", "CHF"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setFailure("");
        const updatedRows = [];

        for (let index = 0; index < baseCurrencies.length; index++) {
          const apiEndpoint = `https://api.exchangerate.host/latest?base=${baseCurrencies[index]}&places=8`;
          const response = await fetch(apiEndpoint);
          const data = await response.json();
          setFetchedDate(data.date);

          const updatedRow = [
            ...tableBodyRows[index].map((item) => ({
              ...item,
              exchangeRate: (1 / data.rates[item.id.slice(0, 3)]).toFixed(4),
            })),
          ];
          updatedRows.push(updatedRow);
        }

        setTableBodyRows(updatedRows);
        setIsLoading(false);
      } catch (error) {
        setFailure(true);
        setIsLoading(false);
        console.error(error);
      }
    };

    setTimeout(fetchData, 2000);
  }, []);

  return [tableBodyRows, isLoading, fetchedDate, failure];
};

export default useCustomFetch;
