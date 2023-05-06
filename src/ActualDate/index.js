import { ActDate } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const ActualDate = () => {
  const { dateStr, timeStr } = useCurrentDate();

  return <ActDate>{`Dzisiaj jest ${dateStr}, ${timeStr}`}</ActDate>;
};

export default ActualDate;
