import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div className="app-comp">
    <App />
  </div>,
  rootElement
);
