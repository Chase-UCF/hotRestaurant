var express = require("express");
var bodyParser = require("body-parser");
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
// process.env.PORT looking for the port that the server company (like heroku) defines randomly, || 3000 will be if previous is undefined
var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

apiRoutes(app);
htmlRoutes(app);