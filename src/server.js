const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const scriptsPath = path.join(__dirname, 'scripts');

app.use('/scripts/', (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (apiKey && apiKey === "yNxkPSyktVoJ6E7S") {
    next();
  } else {
    res.status(403).send('Unauthorized access.');
  }
});

app.use('/scripts', express.static(scriptsPath));

app.get('/scripts/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).send(`<script src="/scripts/${id}.js"></script>`);
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
