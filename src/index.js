import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Sponsors from "./components/Sponsors/Sponsors";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
          <Route path="speakers" element={<Sponsors />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
