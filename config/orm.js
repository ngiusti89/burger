var connection = require("../config/connection.js");

var orm = {
    selectAll: function (callback) {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) throw err;
            callback(result);
        });
    }
    // insertOne: function(){},
    // updateOne: function(){}
};

module.exports = orm;