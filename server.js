var db = require('./resources/js/database.js'),
    express = require('express'),
    app = express();

app.use('/', express.static(__dirname + '/resources'));

app.get('/hoardings', function(res, res) {
  db.query("SELECT * from hoarding;").then(function(d) {
    res.send(d);});
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
