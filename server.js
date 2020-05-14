const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const conn = require('./App/Models/db.js');
var routes = require('./App/Routes/appRoutes.js');

const ms = conn;

ms.getConnection(function(err, connection){
    if(err){
        connection.release();
        console.log('Error getting connection_pool connection: ' + err);
        throw err;
    }
})


console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
  });

routes(app);

app.listen(port);