/*
*	Title: GET and POST Requests With Node Express
*	Author: Sean Hinds
*	Date: 11/04/17
*	Description: This app allows the user to make GET and Post requests. To launch the app, run the
*					command "node app.js" in the main directory. Make sure node and all dependencies in
*					package.json are installed by running "node install". 
*
*					GET requests can be submitted using the url bar by typing "http://localhost:8651/getReq?"
*					followed immediately by the parameters to be submitted in the request header. Alternatively,
*					an html form could be written with "http://localhost:8641/getReq" as the action. 
*
*					POST requests can be submitted via the Advanced Rest Client application for Google Chrome.
*					The action should be set to "http://localhost:8641/postReq" and the parameters to be 
*					submitted in the request body should be entered as type application/json or x-www-urlencoded.
*
*					There is also a node instance at https://flip1@oregonstate.edu:8641 which is running this
*					application.
*/

// this effectively imports express and stores it in a variable
var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 8642);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.render('home.handlebars') //We can omit the .handlebars extension as we do below
});

app.get('/getReq', function(req, res) {
	var qParams = [];
	for (var p in req.query) {
		qParams.push({'name': p, 'value': req.query[p]})
	} 
	var context = {};
	context.dataList = qParams;
	res.render('getReq', context);
});

app.post('/postReq', function(req, res) {
	var qParams = [];
	 // from body not query. Only works with bodyParser middleware
	for (var p in req.body) {
		qParams.push({'name': p, 'value': req.body[p]})
	}
	// for debugging
	console.log(qParams);
	console.log(req.body);
	var context = {};
	context.dataList = qParams;
	res.render('postReq', context);
});


app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
