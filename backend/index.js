const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let trips = [
  {
    key: 1,
    country: "Japan",
    imgURL: "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
    description: "Trip to the Cherry Blossom in Japan",
  },
  {
    key: 2,
    country: "USA",
    imgURL: "https://content.flightcentre.com/sites/default/files/styles/medium/public/au/cms_images/web_images/blog/fc/usa-views-grand-canyon.jpg?itok=_FDzvcHW",
    description: "Road tripping in North America",
  },
  {
    key: 3,
    country: "Brazil",
    imgURL: "https://cdn.mos.cms.futurecdn.net/dxiLtztp2NSCZMRY3SBZne.jpg",
    description: "An amazing trip to Brazil",
  }
];

app.get('/api/trips', (req, res) => {
  res.json(trips);
});

app.post('/api/trips', (req, res) => {
  const newTrip = req.body;
  trips.push(newTrip);
  res.json(newTrip);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
