import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
