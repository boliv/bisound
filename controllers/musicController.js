var musicController = function () {
  var get = function (req,res) {
    var responseJson = {
      jay: "http://listen.radionomy.com/abc-lounge",
      thuong: "http://listen.radionomy.com/bestclubdance",
      jerome: "http://listen.radionomy.com/quisqueya",
      kauna: "http://listen.radionomy.com/ledjamradio.mp3",
      cyrus: "http://listen.radionomy.com/100-hit-radio"
    };

    res.json(responseJson);
  };

  return {
    get: get
  };
};

module.exports = musicController;