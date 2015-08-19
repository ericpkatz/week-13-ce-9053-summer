var express = require("express");
var router = express.Router();
var jwt = require("jwt-simple");

router.get('/', function(req, res){
    res.send(jwt.decode(req.query.token, process.env.SECRET || 'foo'));
});
router.post('/', function(req,res){
    var user = req.body;
    if(user.username == 'prof')
        res.send(jwt.encode(req.body, process.env.SECRET || 'foo'));
    else
        res.status(401).send("Bad user name and password");
});

module.exports = router;