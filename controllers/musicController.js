var musicController = function () {
  var get = function (req,res) {
    var responseJson = {
      sync_url: "http://someurl.com"
    };

    res.json(responseJson);
  };

  return {
    get: get
  };
};

module.exports = musicController;