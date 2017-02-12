var express = require('express');

var routes = function () {
  var streamingRouter = express.Router();

  var streamingController = require('../controllers/streamingController')();

  streamingRouter.route('/')
    .get(streamingController.get);


  return streamingRouter;
};

module.exports = routes;
