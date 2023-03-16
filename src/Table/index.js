import "./style.css";

const Table = () => (
  <table>
    <caption className="table__caption">
      Kursy rynkowe walut (kliknij na komórkę Kursu)
    </caption>
    <tr>
      <th className="table__header">Para</th>
      <th className="table__header">Kurs</th>
      <th className="table__header">Para</th>
      <th className="table__header">Kurs</th>
      <th className="table__header">Para</th>
      <th className="table__header">Kurs</th>
      <th className="table__header">Para</th>
      <th className="table__header">Kurs</th>
    </tr>
    <tr>
      <td className="table__cell">EUR/PLN</td>
      <td className="table__cell table__cell--EURPLN">4.6797</td>
      <td className="table__cell">USD/PLN</td>
      <td className="table__cell table__cell--USDPLN">4.4521</td>
      <td className="table__cell">GBP/PLN</td>
      <td className="table__cell table__cell--GBPPLN">5.2964</td>
      <td className="table__cell">CHF/PLN</td>
      <td className="table__cell table__cell--CHFPLN">4.7515</td>
    </tr>
    <tr>
      <td className="table__cell">EUR/USD</td>
      <td className="table__cell table__cell--EURUSD">1.0521</td>
      <td className="table__cell">PLN/USD</td>
      <td className="table__cell table__cell--PLNUSD">0.2200</td>
      <td className="table__cell">GBP/USD</td>
      <td className="table__cell table__cell--GBPUSD">1.1911</td>
      <td className="table__cell">CHF/USD</td>
      <td className="table__cell table__cell--CHFUSD">1.0701</td>
    </tr>
    <tr>
      <td className="table__cell">USD/EUR</td>
      <td className="table__cell table__cell--USDEUR">0.9512</td>
      <td className="table__cell">PLN/EUR</td>
      <td className="table__cell table__cell--PLNEUR">0.2112</td>
      <td className="table__cell">GBP/EUR</td>
      <td className="table__cell table__cell--GBPEUR">1.1334</td>
      <td className="table__cell">CHF/EUR</td>
      <td className="table__cell table__cell--CHFEUR">1.0148</td>
    </tr>
    <tr>
      <td className="table__cell">USD/GBP</td>
      <td className="table__cell table__cell--USDGBP">0.8356</td>
      <td className="table__cell">PLN/GBP</td>
      <td className="table__cell table__cell--PLNGBP">0.1886</td>
      <td className="table__cell">EUR/GBP</td>
      <td className="table__cell table__cell--EURGBP">0.8802</td>
      <td className="table__cell">CHF/GBP</td>
      <td className="table__cell table__cell--CHFGBP">0.8941</td>
    </tr>
    <tr>
      <td className="table__cell">USD/CHF</td>
      <td className="table__cell table__cell--USDCHF">0.9279</td>
      <td className="table__cell">PLN/CHF</td>
      <td className="table__cell table__cell--PLNCHF">0.2134</td>
      <td className="table__cell">EUR/CHF</td>
      <td className="table__cell table__cell--EURCHF">0.9935</td>
      <td className="table__cell">GBP/CHF</td>
      <td className="table__cell table__cell--GBPCHF">1.1143</td>
    </tr>
  </table>
);

export default Table;
