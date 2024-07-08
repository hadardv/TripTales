import React, { useState } from "react";
import { Box, inputLabelClasses, Typography } from "@mui/material";import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";



const style = {
  position: "absolute", 
 
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  
};


const AddTrip = ({addTripSubmit}) => {
  const [country, setCountry] = useState("");
  const [img, setImage] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const uploadTrip = async (e) => {
    e.preventDefault();
    console.log(country)

    const newTrip =  {
      country: country,
      imgURL: img,
      description: description
  } 
  addTripSubmit(newTrip);
  return navigate('/TripHistory');

}

    

 return (
    <>
      <Navbar />
      <Typography variant="h2" className="text-4xl font-bold text-sky-900 text-center">
        Add A New Trip
      </Typography>
      <Box className="form mt-20" sx={style}>
        <form onSubmit={uploadTrip} className="form space-y-4">
          <div className="form-group">
            <label className="form-label font-bold block mb-2">Country:</label>
            <input
              className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label font-bold block mb-2">
              Upload your main picture from the trip:
            </label>
            <input
              type="file"
              id="file-input"
              name="ImageStyle"
              className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={img}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
      
          <div className="form-group">
            <label className="form-label font-bold block mb-2">Description:</label>
            <textarea
              className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="form-button w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Log Trip
          </button>
        </form>
      </Box>
    </>
  );
};
export default AddTrip