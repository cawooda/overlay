import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import OnOff from "./components/OnOff";

function mountOverlay() {
  const appRoot = document.getElementById("overlay-app-root");
  const onOff = document.getElementById("on-off");

  if (!appRoot) {
    console.warn("Missing #overlay-app-root");
    return;
  }
  if (!onOff) {
    console.warn("Missing #on-off");
    return;
  }

  createRoot(onOff).render(
    <StrictMode>
      <OnOff />
    </StrictMode>
  );
  createRoot(appRoot).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountOverlay);
} else {
  mountOverlay();
}