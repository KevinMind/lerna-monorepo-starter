import express from 'express';

import add from 'add';

const app = express();

app.use('', (req, res) => res.json({ result: add(parseInt(req.query.add, 10) || 0) }));

app.listen(3000, err => {
  if (err) {
    return console.log('error starting app', err);
  }
  return console.log('started app on port', 3000);
});
