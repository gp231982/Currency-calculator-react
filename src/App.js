import MainContainer from "./MainContainer";
import Form from "./Form";
import TableContainer from "./TableContainer";
import Table from "./Table";
import FormItemsList from "./FormItemsList";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Form children={<FormItemsList />} />
        <TableContainer>
          <Table />
        </TableContainer>
      </MainContainer>
    </div>
  );
}

export default App;
