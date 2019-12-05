import express from 'express';

import add from 'add/build/add.esm.js';

const app = express();

app.use('', (req, res) => res.json({ result: add(4) }));

app.listen(3000, err => {
  if (err) {
    return console.log('error starting app', err);
  }
  return console.log('started app on port', 3000);
});
