import { Info, FetchingDate } from "./styled";

const InfoAfterDataLoad = ({ failure, isLoading, fetchedDate }) => {
  return (
    <Info className="infoAfterLoading">
      {!failure && !isLoading && (
        <>
          Kursy walut pobierane są z Europejskiego Banku Centralnego
          <br />
          aktualne na dzień {""}
          <FetchingDate className="fetchedDate">{fetchedDate}</FetchingDate>
        </>
      )}
    </Info>
  );
};

export default InfoAfterDataLoad;
