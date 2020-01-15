import express from 'express';
import cors from 'cors';

import data from './data';

const app = express();

app.use(cors());

app.use('/customer', (req, res) => {
  return res.json({ customer: true, data: data.RECENT_LA });
});

app.use('/advisor', (req, res) => {
  return res.json({ advisor: true, data: data.RECENT_LA });
});

app.listen(3051, err => {
  if (err) {
    return console.log('error encountered starting app', err);
  }
  return console.log('started app on port', 3051);
});
