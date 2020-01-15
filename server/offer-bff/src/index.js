import express from 'express';
import cors from 'cors';

import data from './data';

const app = express();

app.use(cors());

const filterOffers = offers => offers.filter(({ id }) => id %  2 !== 0);

app.use('/customers', (req, res) => {
  return res.json({ customer: true, data: filterOffers(data.RECENT_LA) });
});

app.use('/advisors', (req, res) => {
  return res.json({ advisor: true, data: data.RECENT_LA });
});

app.listen(3051, err => {
  if (err) {
    return console.log('error encountered starting app', err);
  }
  return console.log('started app on port', 3051);
});
