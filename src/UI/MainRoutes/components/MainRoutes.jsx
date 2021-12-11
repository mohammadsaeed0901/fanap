import React from "react";
import "../styles.scss";
import { Link } from "react-router-dom";

const MainRoutes = () => {
  return (
    <header className="header">
      <ul className="header--list">
        <li className="header--item">
          <Link className="header--link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="header--item">
          <Link className="header--link" to="/servers">
            Servers
          </Link>
        </li>
        <li className="header--item">
          <Link className="header--link" to="/create-server">
            Create Server
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default MainRoutes;
