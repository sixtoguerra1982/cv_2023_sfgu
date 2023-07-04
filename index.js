const express = require('express');
const app = express();
const PORT = 3000;
const HOST = 'http://localhost';

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`Listening Express on !!! ${HOST}:${PORT}`);
})