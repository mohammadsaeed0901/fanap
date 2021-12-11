import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Main/components/Menu";
import Header from "./Main/components/Header";
import Dashboard from "./Pages/Dashboard";
import Servers from "./Pages/Servers";
import Server from "./Pages/Server";
import CreateServer from "./Pages/Create-Server";
import Logout from "./Pages/Logout";
import GuardRoute from "./Routes/GuardRoute";
import Index from "./Routes";

function App() {
  return (
    <React.Fragment>
        <Index />
    </React.Fragment>
  );
}

export default App;
