import { gql } from "@apollo/client";

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

export { ALL_PERSONS };
