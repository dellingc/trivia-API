'use strict';

module.exports = function(app) {
    var gamesControl = require('../Controllers/gamesController.js');
    var playersControl = require('../Controllers/playersController.js');
    var locationsControl = require('../Controllers/locationsController.js');
    var gameplayerControl = require('../Controllers/gamePlayerController.js');

    app.route('/games')
      .get(gamesControl.list_all_games)
      .post(gamesControl.make_new_game)

    app.route('/games/:gameDate')
      .get(gamesControl.list_single_game)

    app.route('/players')
      .get(playersControl.list_all_players)
      .post(playersControl.add_new_player)

    app.route('/players/:playerId')
      .get(playersControl.list_single_player)

    app.route('/players/games/:playerId')
      .get(playersControl.list_player_games)

    app.route('/locations')
      .get(locationsControl.list_all_locations)

    app.route('/locations/:locationId')
      .get(locationsControl.list_single_location)

    app.route('/locations/games/:locationId')
      .get(locationsControl.list_location_games)

    app.route('/gameplayer')
      .post(gameplayerControl.make_new_gameplayer)
};