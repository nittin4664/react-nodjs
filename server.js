var express = require('express'),
    app = express();
var hoardings = [{"name": "koramangala", "role": "near wipro signal"},
                 {"name": "koramangala", "role": "8th main"},
                 {"name": "koramangala", "role": "BDA Complex"},
                 {"name": "koramangala", "role": "Sathyas bar"},
                 {"name": "koramangala", "role": "Opp ThoughWorks office"},
                 {"name": "koramangala", "role": "opp CCD"},
                 {"name": "Indiranagar", "role": "12th main"}]
app.use('/', express.static(__dirname + '/resources'));

app.get('/hoardings', function(res, res) {
  res.send(hoardings);
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
