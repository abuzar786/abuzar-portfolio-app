import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ModalProvider } from "./context/modal-context";
import { ThemeProvide } from "./context/theme-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvide>
    <ModalProvider>
      <App />
    </ModalProvider>
  </ThemeProvide>
);
