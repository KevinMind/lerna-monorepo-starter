import express from 'express';
import cors from 'cors';

import add from 'add';

const app = express();

app.use(cors());

app.use('', (req, res) => {
  const input = parseInt(req.query.add, 10) || 0;
  const result = add(input);
  return res.json({ result });
});

app.listen(3054, err => {
  if (err) {
    return console.log('error encountered starting app', err);
  }
  return console.log('started app on port', 3054);
});
