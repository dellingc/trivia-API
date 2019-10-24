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

routes(app);

app.listen(port);