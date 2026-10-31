import { createRoot } from "react-dom/client";
import "@fontsource/anton/400.css";
import "@fontsource-variable/manrope";
import "./styles/tokens.css";
import "./styles/globals.css";
import "./styles/anime.css";
import "./styles/site.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
