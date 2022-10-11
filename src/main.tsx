import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { MyMoviesProvider } from "./context/myMoviesContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MyMoviesProvider>
      <App />
    </MyMoviesProvider>
  </React.StrictMode>
);
