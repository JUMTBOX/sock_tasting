import React from "react";
import Router from "./Router";
import NavBar from "./components/common/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App flex-col align-middle">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
