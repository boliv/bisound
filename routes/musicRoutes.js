var express = require('express');

var routes = function () {
  var musicRouter = express.Router();

  var musicController = require('../controllers/musicController')();

  musicRouter.route('/')
    .get(musicController.get);

  return musicRouter;
};

module.exports = routes;