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

exports.list_single_game = function(req, res){
    Game.getSingleGame(req.params.gameDate, function(err, game){
        console.log(`list_single_game: ${req.params.gameDate}`);
        if(err){
            res.send(err);
        }
        else{
            res.send(game);
        }
    })
}

exports.make_new_game = function(req, res){
    Game.makeNewGame(req.body.gameDate, req.body.location, req.body.teamName, req.body.place, req.body.points, function(err, game){
        console.log(`make_new_game: ${req.body.gameDate}`)
        if(err){
            res.send(err);
        }
        else{
            res.json(game)
        }
    })
}