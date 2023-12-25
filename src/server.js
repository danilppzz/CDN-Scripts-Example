const express = require('express');
const path = require('path');
const fs = require('fs').promises;

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

app.get('/', async (req, res) => {
  try {
    const files = await fs.readdir(scriptsPath);
    const fileNamesWithExtension = files.map(file => `${path.parse(file).name}.js`);
    res.status(200).json({ status: 200, version: '1.0.0', owner: "danilppzz", files: fileNamesWithExtension });
  } catch (error) {
    console.error('Error reading folder:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
