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