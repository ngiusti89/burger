var orm = require("../config/orm.js");

var burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    // insertOne: function(){},
    // updateOne: function(){}
}

module.exports = burger;