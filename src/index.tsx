import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { lightTheme } from "./theme";


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);