// src/TripList.jsx
import React from 'react';
import Trip from './Trip';

const TripList = ({ trips }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
      {trips.map(trip => (
        <Trip key={trip.key} trip={trip} />
      ))}
    </div>
  );
};

export default TripList;
