'use strict';

module.exports = function(app) {
    var gamesControl = require('../Controllers/gamesController.js');
    var playersControl = require('../Controllers/playersController.js');

    app.route('/games')
      .get(gamesControl.list_all_games);

    app.route('/players')
      .get(playersControl.list_all_players);

    app.route('/players/:playerId')
      .get(playersControl.list_single_player);
};