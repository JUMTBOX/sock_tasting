import Router from "./Router";
import NavBar from "./components/common/NavBar";
import { useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname.includes("users") ? null : <NavBar />}
      <Router />
    </div>
  );
}

export default App;
