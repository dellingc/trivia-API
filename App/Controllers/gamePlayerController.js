'use strict';

let GamePlayer = require('../Models/gameplayerModel.js');

exports.make_new_gameplayer = function(req, res){
    GamePlayer.addGamePlayer(req.body.playerId, req.body.gameDate, function(err, gamePlayer){
        console.log(`make_new_gameplayer: ${req.body.playerId} - ${req.body.gameDate}`)
        if(err){
            res.send(err);
        }
        else{
            res.json(gamePlayer)
        }
    })
}