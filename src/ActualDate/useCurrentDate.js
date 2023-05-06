import { useState, useEffect } from "react";

export const useCurrentDate = () => {

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

  const dateStr = new Date().toLocaleDateString(undefined, dateOptions);
  const timeStr = new Date().toLocaleTimeString(undefined, timeOptions);
  const [actualDate, setActualDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActualDate(actualDate => actualDate = new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return {dateStr, timeStr, actualDate}
};
