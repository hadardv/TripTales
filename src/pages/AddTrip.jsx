import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Myfooter from '../components/Myfooter';
import { useNavigate } from 'react-router-dom';



const AddTrip = ({ addTrip }) => {
  
  const [country, setCountry] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = {
      key: Date.now(),
      country,
      imgURL,
      description,
    };
    addTrip(newTrip);
    setCountry('');
    setImgURL('');
    setDescription('');
    setFile(null);
    return navigate('/TripHistory');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgURL(reader.result);
    };
    reader.readAsDataURL(file);

  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 border rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block font-bold mb-2">Country:</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">Upload your main picture from the trip:</label>
        <input
          type="file"
          id="file-input"
          name="ImageStyle"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          onChange={handleImageChange}
          required
        />
        {imgURL && <img src={imgURL} alt="Preview" className="w-full h-64 object-cover rounded-lg mt-4" />}
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">Description:</label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Trip
      </button>
    </form>
  );
};

export default AddTrip;
