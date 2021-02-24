import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand" >Google Books</Link>
      <Link to="/" className="nav-link" style={{ color: "white" }} >Search</Link>
      <Link to="/saved" className="nav-link" style={{ color: "white" }}  >Saved</Link>
    </nav>
  );
}

export default Nav;
