// src/Trip.jsx
import React from 'react';
import CardUI from './CardUI';

const Trip = ({ trip }) => {
  return (
    <CardUI
      imgURL={trip.imgURL}
      title={trip.country}
      description={trip.description}
    />
  );
};

export default Trip;
