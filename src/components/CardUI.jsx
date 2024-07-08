// src/CardUI.jsx
import React from 'react';
import { Button } from 'flowbite-react';

const CardUI = ({ imgURL, title, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src={imgURL} alt={title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
      <a href="">
      <button
        className="w-full mt-3 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Read More
      </button>
      </a>
    </div>
  );
};

export default CardUI;
