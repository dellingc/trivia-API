'use strict';

const sql = require('./db.js')

let Player = function(player){
    this.playerId = player.player_id;
    this.playerFirstName = player.first_name;
    this.playerLastName = player.last_name;
}

Player.getAllPlayers = function(result){
    sql.query("SELECT * FROM players", function(err, res){
        if(err){
            console.log('ERROR: ', err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
}

Player.getSinglePlayer = function(playerId, result){
    sql.query("SELECT * FROM players WHERE player_id = ? ", playerId, function(err, res){
        if(err){
            console.log("ERROR: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
}

//Get all games that a player was a part of
Player.getPlayerGames = function(playerId, result){
    sql.query("SELECT TG.game_date, L.location_name, TG.place, TG.points, P.first_name FROM trivia_games TG JOIN game_players GP ON TG.game_date = GP.game_date JOIN players P ON GP.player_id = P.player_id JOIN locations L ON TG.location = L.location_id WHERE P.player_id = ? ", playerId, function(err, res){
        if(err){
            console.log("ERROR: ", err)
            result(err, null);
        }
        else{
            result(null, res);
        }
    })
}

//Add a new player
Player.addNewPlayer = function(fName, lName, result){
    sql.query("INSERT INTO players(first_name, last_name) VALUES(?, ?)", [fName, lName], function(err, res){
        if(err){
            console.log("ERROR: ", err)
            result(err, null);
        }
        else{
            result(null, res);
        }
    }); 
}

module.exports = Player;