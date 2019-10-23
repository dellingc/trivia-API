'use strict';

const sql = require('./db.js')

let GamePlayer = function(gamePlayer){
    this.playerId = gamePlayer.player_id;
    this.gameDate = gamePlayer.game_date;
}

GamePlayer.addGamePlayer = function(playerId, gameDate, result){
    sql.query("INSERT INTO game_players (player_id, game_date) VALUES (?, ?)", [playerId, gameDate], function(err, res){
        if(err){
            console.log("ERROR: ", err)
            result(err, null);
        }
        else{
            result(null, err);
        }
    })
}

module.exports = GamePlayer;