import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import './i18n.ts'
import { Provider } from "react-redux";
import { store } from "./state";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();