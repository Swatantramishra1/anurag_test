const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var router = require('./routes');

const PORT = 4000;

app.use('/conabio', router);

app.get('', (req, res) => {
  res.send('Hello from express server');
});


// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT})`);
});


