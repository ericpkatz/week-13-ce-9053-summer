var express = require("express");
var router = express.Router();

router.post('/', function(req,res){
    var user = req.body;
    if(user.username == 'prof')
        res.send(req.body);
    else
        res.status(401).send("Bad user name and password");
});

module.exports = router;