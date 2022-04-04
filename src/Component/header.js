import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <div className="logo1"></div>
        <Link to="/">
          <h1>React js</h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
