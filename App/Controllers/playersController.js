'use strict'

let Player = require('../Models/playersModel.js');

exports.list_all_players = function(req, res){
    Player.getAllPlayers(function(err, players){
        console.log('list_all_players');
        if(err){
            res.send(err);
        }
        else{
            res.send(players);
        }
    });
}

exports.list_single_player = function(req, res){
    Player.getSinglePlayer(req.params.playerId, function(err, player){
        console.log(`list_single_player: ${req.params.playerId}`);
        if(err){
            res.send(err);
        }
        else{
            res.send(player);
        }
    });
}

exports.list_player_games = function(req, res){
    Player.getPlayerGames(req.params.playerId, function(err, playerGames){
        console.log(`list_player_games: ${req.params.playerId}`);
        if(err){
            res.send(err);
        }
        else{
            res.send(playerGames);
        }
    });
}

exports.add_new_player = function(req, res){
    Player.addNewPlayer(req.body.fName, req.body.lName, function(err, player){
        console.log(`add_new_player: ${req.body.fName} ${req.body.lName}`);
        if(err){
            res.send(err);
        }
        
        else{
            res.json(player)
        }
    })
}

exports.remove_player = function(req, res){
    Player.removePlayer(req.params.playerId, function(err, player){
        console.log(`remove_player: ${req.params.fName}`);
        if(err){
            res.send(err);
        }

        else{
            res.send(`Player removed: ${player}`)
        }
    })
}