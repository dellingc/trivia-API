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

module.exports = Player;