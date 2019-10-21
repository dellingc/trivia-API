'use strict';

const sql = require('./db.js')

let Game = function(game){
    this.gameDate = game.game_date;
    this.location = game.location;
    this.team_name = game.team_name;
    this.place = game.place;
    this.points = game.points;
}

const getAllQuery = "select T.game_date, L.location_name, GROUP_CONCAT(P.first_name SEPARATOR ', ') as players, T.team_name, T.points, T.place from trivia_games T join locations L on T.location = L.location_id join game_players GP on T.game_date = GP.game_date join players P on GP.player_id = P.player_id group by T.game_date"

Game.getAllGames = function(result){
    sql.query(getAllQuery, function(err, res){
        if(err){
            console.log('Error: ', err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    })
}

module.exports = Game;