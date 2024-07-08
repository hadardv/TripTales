import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import "./home.css";

function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <HomeCards />
    </>
  );
}

export default Home;
