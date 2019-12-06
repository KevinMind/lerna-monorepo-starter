import express from 'express';

const app = express();

// serve static files
app.use(express.static(process.env.BUILD_FOLDER));

// serve client root
app.use('/root', (req, res) => {
  res.json({ root: true });
});

// serve micro frontend
app.use('/:fragmentId', (req, res) => {
  const { fragmentId } = req.params;
  res.json({ fragmentId });
});
