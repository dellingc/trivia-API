const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const conn = require('./App/Models/db.js');
var routes = require('./App/Routes/appRoutes.js');

const ms = conn;

ms.connect();

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);