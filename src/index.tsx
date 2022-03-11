import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import './i18n.ts'
import { Provider } from "react-redux";
import { store } from "./state";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailedView from "./components/DetailedView/DetailedView"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/Explanation' element={<DetailedView />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();