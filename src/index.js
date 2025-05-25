import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './App.css';  // or the correct path to your CSS file
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
