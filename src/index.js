import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  ApolloProvider,
  gql,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  connectToDevTools: true, //esto es un flag que nos permite interactuar con el devtools de chrome
  cache: new InMemoryCache(), //con eso tenemos un cache en memoria para evitar hacer una peticion de la cual ya obtuvimos la data anteriormente
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
  }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* El apollo se conecta a toda la app por medio de un provider */
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
