import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./Page.tsx";
import "./styles/globalStyles.css";
import "./styles/colors.scss";
import "./styles/fonts.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
