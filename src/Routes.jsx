import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import TripHistory from "./pages/TripHistory";

const addATrip = async (newTrip) => {
  const res = await fetch('http://localhost:5000/api/trips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTrip)
  });
  return res.json();
};


function Routers() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TripHistory" element={<TripHistory addATrip={addATrip} />} />
      <Route path="/Wishlist" element={<Wishlist />} />

    </Routes>
  </Router>
  );
}

export default Routers;