import React from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
const GET_PERSON_BY_NAME = gql`
  query getPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      name
      phone
      age
    }
  }
`;

/* $nameToSearch es una variable */
export const Persons = ({ persons }) => {
  //Una lazy query es una consulta que se ejecuta solo cuando se necesita y no cuando se carga la pagina o en cada renderizacion
  //Devuelve 2 cosas una funcion que ejeuta la consulta y el valor de respuesta de la consulta
  const [getPerson, result] = useLazyQuery(GET_PERSON_BY_NAME);
  const [person, setPerson] = React.useState(null);

  const handleClick = (name) => {
    //Aqui en cada click llamamos a la consulta y le pasamos las variables necesarias que definimos en la consulta graphql
    getPerson({ variables: { nameToSearch: name } });
  };

  useEffect(() => {
    result.data && setPerson(result.data.findPerson);
  }, [result]);

  if (person) {
    return (
      <div>
        <h1>{person.name}</h1>
        <p>{person.phone}</p>
        <p>{person.age}</p>
        <button onClick={() => setPerson(null)}>Close</button>
      </div>
    );
  }
  return persons.map((person, index) => (
    <div key={index} onClick={() => handleClick(person.name)}>
      <p>{person.name}</p>
      <p>{person.phone}</p>
      <p>{person.age}</p>
      <p>{person.address.street}</p>
      <p>{person.address.city}</p>
    </div>
  ));
};
