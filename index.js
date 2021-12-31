const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8080;

const feedRoutes = require('./views/feedRoutes')

const app = express();

app.use(bodyParser.json())

app.use('/blog', feedRoutes)


app.listen(PORT, () => {
  `Server listening on ${PORT}`
});

