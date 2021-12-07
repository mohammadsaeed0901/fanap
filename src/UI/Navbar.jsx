import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar--list">
        <li className="navbar--item">
          <Link className="navbar--link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="navbar--item">
          <Link className="navbar--link" to="/servers">
            Servers
          </Link>
        </li>
        <li className="navbar--item">
          <Link className="navbar--link" to="/create-server">
            Create Server
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
