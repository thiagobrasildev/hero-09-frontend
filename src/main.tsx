import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";

import GlobalStyle from "./styles/Global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>
);
