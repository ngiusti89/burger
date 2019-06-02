var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res){
    res.redirect("/index");
});

router.get("/index", function(req, res){
    burger.selectAll(function(data){
        var handlebarsObject = {burgers: data};
        console.log(handlebarsObject)
        res.render("index", handlebarsObject);
    });
});

module.exports = router;