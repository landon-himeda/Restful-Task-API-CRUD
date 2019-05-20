//REQUIRE STATMENTS
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require("path");

//APP CONFIGURATION
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

//ROUTES
require('./server/routes')(app);

//SERVER LISTEN
app.listen(8000, function(){
    console.log("Listening on port 8000");
});