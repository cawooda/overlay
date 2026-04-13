import "./App.css";
import Menu from "./components/Menu";
function App() {
  if (localStorage.getItem("overlay") == "show")
    return (
      <>
        <Menu />
      </>
    );
}

export default App;
