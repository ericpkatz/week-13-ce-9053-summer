var express = require("express");
var router = express.Router();
var Thing = require("../models/things")

router.get("/", function(req, res){
   Thing.find({}).then(function(things){
       res.send(things);
   }); 
});

router.get("/:id", function(req, res){
   Thing.findById(req.params.id).then(function(thing){
       res.send(thing);
   }); 
});

router.post("/", function(req, res){
   var thing = new Thing(req.body);
   thing.save(function(err, _thing){
      if(err){
         res.status(422); 
         res.send(err);
      }
      else
         res.send(thing);
   });
});

router.post("/:id/delete", function(req, res){
   Thing.remove({_id: req.params.id}, function(err){
      if(err){
         res.status(422); 
         res.send(err);
      }
      else
         res.send({});
   });
});

module.exports = router;