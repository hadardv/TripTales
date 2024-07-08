import React from 'react'
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import CardUI from './CardUI';

const TripList = ({ trips }) => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <div style={{ textAlign: 'center' }}>
    <Typography variant="h4" component="div" gutterBottom>Trips History</Typography>
    </div>
      <Grid container spacing={3}>
        {trips.map((trip) => (
          <Grid item xs={12} sm={6} md={4} key={trip.key}>
            <CardUI
              imgURL={trip.imgURL}
              country={trip.country}
              description={trip.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TripList