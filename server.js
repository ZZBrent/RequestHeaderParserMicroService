// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');

var ip = require('ip');
var os = require('os');
const si = require('systeminformation');

// callback style
si.cpu(function(data) {
	console.log('CPU-Information:');
	console.log(data);
})

// promises style - new in version 3
si.cpu()
	.then(data => console.log(data))
	.catch(error => console.error(error));


app.get('/', function(req, res){
   res.render('index', {
      ipaddress: ip.address(),
      language: req.headers["accept-language"] ,
      software: process.platform
   });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
