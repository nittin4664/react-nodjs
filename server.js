"use strict";

let express = require('express'),
    products = require('./models/result'),
var db = require('./resources/js/database.js'),
    app = express();


app.use('/', express.static(__dirname + '/resources'));

app.get('/hoardings', function(res, res) {
  db.query("SELECT * from hoarding;").then(function(d) {
    res.send(d);});
});

app.set('port', process.env.PORT || 3000);


// Adding CORS support
app.all('*', function (req, res, next) {
    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        next();
    }
});

app.get('/products', products.findAll);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
