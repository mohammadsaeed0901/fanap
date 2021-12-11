import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./UI/Navbar";
import MainRoutes from "./UI/MainRoutes";
import Dashboard from "./pages/Dashboard";
import Servers from "./pages/Servers";
import Server from "./pages/Server";
import CreateServer from "./pages/Create-Server";
import Logout from "./pages/Logout";
import Login from "./pages/Login/components/Login";

function App(props) {
  return (
    <React.Fragment>
      
      <Router>
      <Navbar />
      <MainRoutes/>
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
