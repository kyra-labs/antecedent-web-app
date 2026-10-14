import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles/globals.css";
// Press ripple for plain-HTML m3e-css pieces (the top app bar's NavLinks, the "Also worth knowing"
// disclosure rows): delegated listeners on document, ~1 KB. m3e-react components ripple on
// their own and are skipped (they carry data-ripple).
import "@kyralabs/m3e-elements/ripple.js";
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
