var express = require('express');
var app = express();
var date = new Date();

var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp/', function (req, res) {
  res.json({date});
}); 

app.get('/api/timestamp/:userDate', function (req, res) {

  let dateResponse = new Date(req.params.userDate);
    
  if (dateResponse === null) {
    res.json({ "unix": null, "utc": "Invalid Date"});
  } else {
    res.json({"unix": dateResponse.getTime(), "utc": dateResponse.toUTCString()});
  }
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
