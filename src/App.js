import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { Persons } from "./Persons";
import { PersonForm } from "./PersonForm";
import { ALL_PERSONS } from "./persons/grahql-queries";

function App() {
  /* Se le envia al useQuery un tipo de consulta graphql y devuelve la data, cuando esta cargando y un flag de error */
  const { data, loading, error } = useQuery(ALL_PERSONS);
  console.log("🚀 ~ file: App.js ~ line 22 ~ App ~ result", data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>React + Graphql</p>
            {data && <Persons persons={data.allPersons} />}
          </>
        )}
      </header>
      <PersonForm />
    </div>
  );
}

export default App;
