import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { LocalStorageProvider } from "./services/context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocalStorageProvider>
      <App />
    </LocalStorageProvider>
  </React.StrictMode>
);
