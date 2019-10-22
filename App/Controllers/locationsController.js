'use strict'

let Location = require('../Models/locationsModel.js');

exports.list_all_locations = function(req, res){
    Location.getAllLocations(function(err, locations){
        console.log('list_all_locations');
        if(err){
            res.send(err);
        }
        else{
            res.send(locations);
        }
    });
}

exports.list_single_location = function(req, res){
    Location.getSingleLocation(req.params.locationId, function(err, location){
        console.log(`list_single_location: ${req.params.locationId}`);
        if(err){
            res.send(err);
        }
        else{
            res.send(location);
        }
    });
}

exports.list_location_games = function(req, res){
    Location.getLocationGames(req.params.locationId, function(err, locationGames){
        console.log(`list_location_games: ${req.params.locationId}`);
        if(err){
            res.send(err);
        }
        else{
            res.send(locationGames);
        }
    });
}