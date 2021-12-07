import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Dashboard from "./components/Dashboard";
import Servers from "./components/Servers";
import Server from "./components/Server";
import CreateServer from "./components/Create-server";

function App(props) {
  return (
    <React.Fragment>
      
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/servers/:id" element={<Server />} />
          <Route exact path="/servers" element={<Servers />} />
          <Route exact path="/create-server" element={<CreateServer />} />
          <Route exact path="/" />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
