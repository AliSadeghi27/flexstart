import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="font-Vazirmatn">
        <App />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
