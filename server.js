const express = require('express');
const app = express();


app.get('/', function (req, res) {
  res.send('Hello World      yeah boi')
})
const port = 5000;

app.listen(port, console.log(`Server running on port ${port}`));