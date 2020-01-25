'use strict';

var mysql = require('mysql');

//local mysql db connection
/*
var local_db_config = {
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'triviatracker'
};
*/

//remote mysql db connection
/*
var remote_db_config = {
    host : 'sql180.main-hosting.eu',
    user : 'u388170546_maxxtrivia',
    password : 'Maxxpower!',
    database : 'u388170546_triviatracker'
};
*/

//Updated to use connection_pool to fix disconnect error
var connection_pool = mysql.createPool({
    connectionLimit: 100,
    host : 'sql180.main-hosting.eu',
    user : 'u388170546_maxxtrivia',
    password : 'Maxxpower!',
    database : 'u388170546_triviatracker',
    multipleStatements: true
});

module.exports = connection_pool;