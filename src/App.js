import MainContainer from "./MainContainer";
import Form from "./Form";
import TableContainer from "./TableContainer";
import Table from "./Table";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Form />
        <TableContainer>
          <Table />
        </TableContainer>
      </MainContainer>
    </div>
  );
}

export default App;
