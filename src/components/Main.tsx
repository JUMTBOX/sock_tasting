import React from "react";
import "../styles/Main.css";

export default function Main() {
  return (
    <div className="main_container w-full h-full">
      <div className="main_box flex justify-center w-3/5 h-2/3 bg-white shadow-md rounded-lg">
        <div data-testid="R u there?">Main</div>
      </div>
    </div>
  );
}
