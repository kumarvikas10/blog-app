import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router >
      <App />
    </Router>
  </React.StrictMode>
);

