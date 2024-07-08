// src/TripHistory.jsx
import React, { useState, useEffect } from 'react';
import { dummyTrips } from '../Dummy';
import TripList from '../components/TripList';
import Navbar from '../components/Navbar';
import Myfooter from '../components/Myfooter';
import AddTripModal from '../components/AddTripModal';
import { Button } from '@mui/material';


const TripHistory = ({ addATrip }) => {
  const [trips, setTrips] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchTrips = async () => {
      const res = await fetch('http://localhost:5000/api/trips');
      const data = await res.json();
      setTrips(data);
    };
    fetchTrips();
  }, []);

  const addTrip = async (newTrip) => {
    const addedTrip = await addATrip(newTrip);
    setTrips([...trips, addedTrip]);
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <h2 className='text-4xl mt-3 font-bold text-sky-900 mb-7 text-center'>Trip History</h2>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add a New Trip
      </Button>
      <AddTripModal open={modalOpen} onClose={handleClose} addTrip={addTrip} />
      <TripList trips={trips} />
      <Myfooter />
    </div>
  );
};

export default TripHistory;