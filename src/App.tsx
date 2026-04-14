import { useState } from "react";
import Menu from "./components/Menu";

function App() {
  const [overlayOn] = useState(() => {
    return localStorage.getItem("overlay") === "show";
  });

if (overlayOn) return <Menu/>
  
}

export default App;