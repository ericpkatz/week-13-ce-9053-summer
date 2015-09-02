var mongoose = require("mongoose");
var Promise = require('bluebird');

module.exports = {
    connect: connect
};

var _promise;
function connect(){
  if(_promise)
    return _promise;

  _promise = new Promise(function(resolve, reject){
    mongoose.connect(process.env.CONN || "mongodb://localhost:27017/my_world", function(err){
      if(err)
        return reject(err);
      resolve(mongoose.connection.name);
    });
  });
  return _promise;
}
