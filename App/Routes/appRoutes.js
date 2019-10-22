'use strict';

module.exports = function(app) {
    var gamesControl = require('../Controllers/gamesController.js');
    var playersControl = require('../Controllers/playersController.js');
    var locationsControl = require('../Controllers/locationsController.js');

    app.route('/games')
      .get(gamesControl.list_all_games);

    app.route('/players')
      .get(playersControl.list_all_players);

    app.route('/players/:playerId')
      .get(playersControl.list_single_player);

    app.route('/locations')
      .get(locationsControl.list_all_locations)

    app.route('/locations/:locationId')
      .get(locationsControl.list_single_location)
};