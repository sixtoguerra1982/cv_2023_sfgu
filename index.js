const express = require('express');
const app = express();
const PORT = 3000;
const HOST = 'http://localhost';


app.use(express.static("./www"));

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(PORT, () => {
  console.log(`Listening Express on !!!! ${HOST}:${PORT}`);
})