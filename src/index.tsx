import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import reportWebVitals from "./extra/reportWebVitals";
import * as serviceWorker from "./extra/serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
serviceWorker.register();
