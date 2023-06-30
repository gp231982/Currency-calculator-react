import { Caption } from "./styled";

// const TableCaption = ({ isLoading, failure }) => (
//   <Caption isLoading={isLoading} failure={failure}>
//     {isLoading ? (
//       <p>Chwileczkę... Ładuję kursy walut 🤑 z Europejskiego Banku Centralnego !!!</p>
//     ) : failure ? (
//       <p>Kursy rynkowe walut (kliknij na komórkę Kursu)</p>
//     )}
//   </Caption>
// );

const TableCaption = ({ isLoading, failure }) => (
  <Caption isLoading={isLoading} failure={failure}>
    {isLoading ? (
      <p>
        Chwileczkę... Ładuję kursy walut 🤑 z Europejskiego Banku Centralnego
        !!!
      </p>
    ) : (
      <p>
        {failure
          ? "UPSSS...Przykro mi 🙄🙄. Wygląda na to,że wystąpił błąd. Sprawdź czy link do API jest dobry i spróbuj ponownie później."
          : "Kursy rynkowe walut (kliknij w komórkę kursu)"}
      </p>
    )}
  </Caption>
);

export default TableCaption;
