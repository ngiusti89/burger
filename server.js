var express = require("express");
var exHandBars = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.engine("handlebars", exHandBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});