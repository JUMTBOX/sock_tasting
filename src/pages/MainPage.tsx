import React from "react";
import "../styles/pages/MainPage.css";

export default function Main() {
  return (
    <div className="main_container w-full h-full">
      <div className="main_box bg-white shadow-md rounded-lg">
        <div data-testid="R u there?">Main</div>
      </div>
    </div>
  );
}
