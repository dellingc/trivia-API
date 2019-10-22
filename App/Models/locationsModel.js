'use strict';

const sql = require('./db.js')

let Location = function(location){
    this.locationId = location.location_id;
    this.locationName = location.location_name;
}

Location.getAllLocations = function(result){
    sql.query("SELECT * FROM locations", function(err, res){
        if(err){
            console.log('ERROR: ', err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
}

Location.getSingleLocation = function(locationId, result){
    sql.query("SELECT * FROM locations WHERE location_id = ? ", locationId, function(err, res){
        if(err){
            console.log('ERROR: ', err);
            result(err, null)
        }
        else{
            result(null, res);
        }
    })
}

module.exports = Location;