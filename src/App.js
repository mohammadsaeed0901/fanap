import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./UI/Navbar";
import Dashboard from "./pages/Dashboard";
import Servers from "./pages/Servers";
import Server from "./pages/Server";
import CreateServer from "./pages/Create-Server";

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
