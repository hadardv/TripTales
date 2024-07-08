// src/AddTripModal.jsx
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const AddTripModal = ({ open, onClose, addTrip }) => {
  const [country, setCountry] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTrip = {
      key: Date.now(),
      country,
      imgURL,
      description,
    };
    await addTrip(newTrip);
    setCountry('');
    setImgURL('');
    setDescription('');
    setFile(null);
    onClose();
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
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add a New Trip</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="dense"
            label="Country"
            type="text"
            fullWidth
            variant="outlined"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <TextField
            margin="dense"
            label="Upload your main picture from the trip"
            type="file"
            fullWidth
            variant="outlined"
            onChange={handleImageChange}
            required
          />
          {imgURL && <img src={imgURL} alt="Preview" style={{ width: '100%', marginTop: '10px' }} />}
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add Trip
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTripModal;
