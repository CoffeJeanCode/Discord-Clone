import React from "react";
import ReactDOM from "react-dom";

import App from "App";

import reportWebVitals from "extra/reportWebVitals";
import * as serviceWorker from "extra/serviceWorker";
import "styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals((metric) => console.log(metric));
serviceWorker.register();
