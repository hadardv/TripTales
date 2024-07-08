import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTrip from "./pages/AddTrip";
import TripHistory from "./pages/TripHistory";



function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddTrip" element={<AddTrip />} />
        <Route path="/TripHistory" element={<TripHistory />} />
      </Routes>
    </Router>
  );
}

export default Routers;