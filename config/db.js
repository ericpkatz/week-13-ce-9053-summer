var mongoose = require("mongoose");

module.exports = {
    connect: connect
};

function connect(cb){
    mongoose.connect(process.env.CONN || "mongodb://localhost:27017/my_world");
    mongoose.connection.on("open", function(){
        cb(null, "done");
    });
    mongoose.connection.on("error", function(err){
        cb(err, null);
    });
}
