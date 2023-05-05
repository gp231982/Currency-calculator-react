import { useState, useEffect } from "react";
import { ActDate } from "./styled";

const dateOptions = {
  month: "long",
  weekday: "long",
  year: "numeric",
  day: "numeric",
};

const timeOptions = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const ActualDate = () => {
  const dateStr = new Date().toLocaleDateString(undefined, dateOptions);
  const timeStr = new Date().toLocaleTimeString(undefined, timeOptions);
  const [actualDate, setActualDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActualDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return <ActDate>{`Dzisiaj jest ${dateStr}, ${timeStr}`}</ActDate>;
};

export default ActualDate;
