var orm = require("../config/orm.js");

var burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    insertOne: function (cols, vals, callback) {
        orm.create("burgers", cols, vals, function (res) {
            callback(res);
        });
    },
    // updateOne: function(){}
}

module.exports = burger;