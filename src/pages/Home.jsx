import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import Myfooter from '../components/Myfooter';
import "./home.css";

function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <HomeCards />
    <Myfooter />
    </>
  );
}

export default Home;
