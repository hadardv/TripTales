import React from 'react';
import { Button } from '@mui/material';

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="relative flex justify-center items-center h-80vh bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: 'cover',
          height: '550px'
        }}
      >
        
        <div className="absolute inset-0 bg-white opacity-50"></div>

        
        <div className="relative text-white p-5 text-center">
          <h1 className="mb-3 mt-40 text-7xl font-extrabold text-sky-900">Welcome To Trip Tales</h1>
          <h4 className="mb-3 text-2xl mt-10 font-bold text-sky-900">
            Capture and share your travel adventures with ease. Log your trips, add photos and notes, and relive your journeys anytime, anywhere.
          </h4>
          <a href='./TripHistory'>
          <Button variant="contained">View Trips</Button>
          </a>
        </div>
      </div>
    </header>
  );
}