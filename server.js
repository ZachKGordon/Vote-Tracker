var express = require('express');
var app = express();


app.use(express.static('all'));

var server = app.listen(5000, function () {

  console.log('Example app running');

});

app.get('/secret', function (req, res) {
  console.log('Someone wants the secret section ...');
  res.send('For your eyes only');
});


app.use('/', function(req, res) {

  var options = {
    root:__dirname + '/all/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  res.sendFile('./error.html', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end ();
    }
    else {
      console.log('sent:', 'error.html');
      }
    });
})



