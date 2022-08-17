import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { CREATE_PERSON } from "./persons/graphql-mutations";
import { ALL_PERSONS } from "./persons/grahql-queries";

export const PersonForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [createPerson] = useMutation(CREATE_PERSON, {
    /* Con esto le dicimos CUANDO tiene que hacer refetch, en este caso hara el refetch a ALL_Persons cuando esta mutacion sea realizada */
    //con esto se mantiene la UI actualizada
    refetchQueries: [{ query: ALL_PERSONS }],
  });

  const handleSudmit = (e) => {
    e.preventDefault();
    createPerson({ variables: { name, age: Number(age), city, street } });
    setAge("");
    setName("");
    setPhone("");
    setStreet("");
    setCity("");
  };
  return (
    <>
      <h2>Form with grahql mutation</h2>
      <form onSubmit={handleSudmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder="Street"
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
