var streamingController = function () {
  var get = function (req,res) {
    var name;
    if(req.query.name){
        name = req.query.name;
    }

    var responseJson = {
      david: "http://listen.radionomy.com/abc-lounge",
      sony: "http://listen.radionomy.com/bestclubdance",
      jerome: "http://listen.radionomy.com/quisqueya",
      kauna: "http://listen.radionomy.com/ledjamradio.mp3",
      cyrus: "http://listen.radionomy.com/100-hit-radio",
      defaultStream:"http://listen.radionomy.com/100-hit-radio"
    };
    if(name!==undefined){
      res.json(responseJson[name]);
    }else{
      res.json(responseJson['defaultStream']);
    }
  };

  return {
    get: get
  };
};

module.exports = streamingController;
