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
    updateOne: function (objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function (res) {
            callback(res);
        });
    },
}

module.exports = burger;