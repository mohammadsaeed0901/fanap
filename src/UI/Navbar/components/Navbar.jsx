import React from "react";
import "../styles.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar--list">
        <li className="navbar--item">
         <img src="https://picsum.photos/id/1005/50" alt="user profile" className="navbar--img"/>
        </li>
        <li className="navbar--item">
          <p>User</p>
        </li>
        <li className="navbar--item" style={{marginLeft: "auto"}}>
          <Link className="navbar--link" to="/dashboard">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
