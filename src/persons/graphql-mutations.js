import { gql } from "@apollo/client";

const CREATE_PERSON = gql`
  mutation createPerson(
    $name: String!
    $age: Int!
    $city: String!
    $street: String!
  ) {
    addPerson(name: $name, age: $age, street: $street, city: $city) {
      name
      phone
      age
      address {
        street
        city
      }
    }
  }
`;

export { CREATE_PERSON };
