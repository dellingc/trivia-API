'use strict';

const sql = require('./db.js')

let Game = function(game){
    this.gameDate = game.game_date;
    this.location = game.location;
    this.team_name = game.team_name;
    this.place = game.place;
    this.points = game.points;
}

const getAllQuery = "select T.game_date, L.location_name, GROUP_CONCAT(P.first_name SEPARATOR ', ') as players, T.team_name, T.points, T.place from trivia_games T join locations L on T.location = L.location_id join game_players GP on T.game_date = GP.game_date join players P on GP.player_id = P.player_id group by T.game_date ORDER BY T.game_date DESC"

const getSingleQuery = "SELECT T.game_date, L.location_name, GROUP_CONCAT(P.first_name SEPARATOR ', ') AS players, T.team_name, T.points, T.place FROM trivia_games T JOIN locations L ON T.location = L.location_id JOIN game_players GP ON T.game_date = GP.game_date JOIN players P ON GP.player_id = P.player_id WHERE T.game_date = ? GROUP BY T.game_date"


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

Game.getSingleGame = function(gameDate, result){
    sql.query(getSingleQuery, gameDate, function(err, res){
        if(err){
            console.log('ERROR: ', err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    })
}

Game.makeNewGame = function(date, location, teamName, place, points, result){
    sql.query("INSERT INTO trivia_games (game_date, location, team_name, place, points) VALUES (?, ?, ?, ?, ?)", [date, location, teamName, place, points], function(err, res){
        if(err){
            console.log('ERROR: ', err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    })
}

Game.deleteGame = function(date, result){
    sql.query("DELETE FROM trivia_games WHERE game_date = ?", date, function(err, res){
        if(err) {
            console.log('ERROR: ', err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    })
}

//updateGame not working
Game.updateGame = function(location, teamName, place, points, date, result){
    sql.query("UPDATE trivia_games SET location = ?, team_name = ?, place = ? WHERE game_date = ?", [location, teamName, place, points, date], function(err, res){
        if(err){
            console.log(`ERROR: ${err}`);
            result(err, null);
        }
        else {
            result(null, res)
        }
    })
}

module.exports = Game; 