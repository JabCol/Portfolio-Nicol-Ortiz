import { createRoot } from "react-dom/client";
import "./styles/style.css";
import App from "./App";
import { CharacterAnimationProvider } from "./components/world/scenes/globales/CharacterAnimations";

const root = createRoot(document.getElementById("root"));

root.render(
  <CharacterAnimationProvider>
    <App />
  </CharacterAnimationProvider>
);
