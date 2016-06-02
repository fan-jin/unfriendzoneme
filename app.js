var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

// parse application/json
app.use(bodyParser.json())

app.post('/msg', function(req, res){
  console.log(req.body.msg);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
