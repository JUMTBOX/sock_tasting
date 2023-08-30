import Router from "./Router";
import NavBar from "./components/common/NavBar";
import { useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname.includes("users") ? null : <NavBar />}
      <div className="App">
        <div className="empty_space"></div>
        <Router />
      </div>
    </>
  );
}

export default App;
