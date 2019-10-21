'use strict'

let Game = require('../Models/gamesModel.js');

exports.list_all_games = function(req, res){
    Game.getAllGames(function(err, games){
        console.log('list_all_games');
        if(err){
            res.send(err);
        }
        else{
            res.send(games);
        }
    })
}

