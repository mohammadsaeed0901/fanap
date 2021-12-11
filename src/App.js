import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Main/components/Navbar";
import Header from "./Main/components/Header";
import Dashboard from "./pages/Dashboard";
import Servers from "./pages/Servers";
import Server from "./pages/Server";
import CreateServer from "./pages/Create-Server";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import GuardRoute from "./Routes/GuardRoute";

function App(props) {
  return (
    <React.Fragment>
      
      <Router>
      <Navbar />
      <Header/>
        <Routes>
          <GuardRoute exact path="/dashboard" element={<Dashboard />} />
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
