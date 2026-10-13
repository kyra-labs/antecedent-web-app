import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles/globals.css";
import App from "./App.jsx";
import { ThemeProvider } from "./components/common/ThemeProvider.jsx";
import { AriaRouter } from "./components/common/AriaRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AriaRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AriaRouter>
    </BrowserRouter>
  </StrictMode>,
);
