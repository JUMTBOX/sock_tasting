import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/common/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navBar_container" data-testid="navBar">
      <div className="navBar_box flex space-x-6 px-3">
        <span>
          <Link to={"/"} className="navBar_logo"></Link>
        </span>
        <span className="flex space-x-8">
          <Link to={"/board"}>게시판</Link>
        </span>
      </div>
    </nav>
  );
}
