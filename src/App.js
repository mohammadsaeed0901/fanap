import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Main/components/Menu";
import Header from "./Main/components/Header";
import Dashboard from "./Pages/Dashboard";
import Servers from "./Pages/Servers";
import Server from "./Pages/Server";
import CreateServer from "./Pages/Create-Server";
import Logout from "./Pages/Logout";
import Login from "./Pages/Login";
import GuardRoute from "./Routes/GuardRoute";

function App(props) {
  return (
    <React.Fragment>
      
      <Router>
      <Menu />
      <Header/>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/servers/:id" element={<Server />} />
          <Route exact path="/servers" element={<Servers />} />
          <Route exact path="/create-server" element={<CreateServer />} />
          <Route exact path="/" element={<Login/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
