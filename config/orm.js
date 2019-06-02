var connection = require("../config/connection.js");

//   ***** from Mvc Example *****
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}
//   **********

var orm = {

    selectAll: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    
    insertOne: function (burger_name, callback) {
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: burger_name,
            devoured: false
        }, function (err, result) {
            if (err) throw err;
            callback(result);
        })
    },
    updateOne: function (burgerId, callback) {
        connection.query("UPDATE burgers SET ? WHERE ?", [{ devoured: true }, { id: burgerId }],
            function (err, result) {
                if (err) throw err;
                callback(result);
            });
    }
};

module.exports = orm;