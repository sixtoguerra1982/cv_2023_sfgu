const express = require('express');
const app = express();
const PORT = 3000;
const HOST = 'http://localhost';


app.use(express.static("./www"));

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.get('/cvfile',(req, res) => {
  res.download(__dirname +'/www/assets/file/curriculum-vitae-SG.pdf')
})

app.listen(PORT, () => {
  console.log(`Listening Express on !!!! ${HOST}:${PORT}`);
})