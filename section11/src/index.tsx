import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import _ from "lodash";

const root = ReactDOM.createRoot(document.getElementById("root")!); // null이 아님을 선언 ! 혹은 as HTMLElement라고 쓰기
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
