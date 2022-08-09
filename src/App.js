import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { Persons } from "./Persons";

const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      age
      phone
      address {
        street
        city
      }
    }
  }
`;

function App() {
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
    </div>
  );
}

export default App;
