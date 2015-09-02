var mongoose = require("mongoose");
var Promise = require('bluebird');
var Thing = require('../models/thing');
var User = require('../models/user');

module.exports = {
    connect: connect,
    seed: seed
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

function seed(){
  return new Promise(function(resolve, reject){
    var rock = new Thing({name: 'Rock', price: 1.99});
    var paper = new Thing({name: 'Paper', price: 0.75});
    var scissors = new Thing({name: 'Scissors', price: 8 });
    var user = new User({username: 'prof', password: 'pw' });
    connect()
      .then( function(){
          return Promise.all([User.remove({}), Thing.remove({})])
        }
      )
      .then( function(){
        Promise.all([rock.save(), paper.save(), scissors.save(), user.save()])
      })
      .then( function(){
        resolve([rock, paper, scissors, user]);
      });
  });

}
