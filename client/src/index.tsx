import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import client from "./graphql/index";
import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
