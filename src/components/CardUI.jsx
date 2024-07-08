import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider } from "@mui/material";
import { Button } from '@mui/material';


const CardUI = ({ imgURL, country, description }) => {
  return (
    <Card className="flex flex-col h-full" sx={{ maxWidth: 345 }}>
      <CardActionArea className="flex flex-col h-full">
        <CardMedia
          component="img"
          height="140"
          image={imgURL}
          alt="trip image"
          sx={{ objectFit: "cover" }}
        />
        <Divider />
        <CardContent className="flex-grow flex flex-col">
          <Typography gutterBottom variant="h5" component="div">
            {country}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="mb-4">
            {description}
          </Typography>
          <div className="mt-auto">
            <Button variant="outlined" fullWidth>Show More</Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardUI
