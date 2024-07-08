import React from 'react'
import Navbar from '../components/Navbar'
import TripList from '../components/TripList'
import { useState, useEffect } from "react";
import axios from "axios";

const TripHistory = () => {

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get("http://localhost:3000/TripHistory");
        setTrips(response.data);
      } catch (error) {}
    };

    fetchTrips();
  });



  return (
    <>
     <Navbar />
    <TripList trips = {trips} />
    </>
  )
}

export default TripHistory