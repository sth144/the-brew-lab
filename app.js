/*******************************************************************************************
    Title: Brew Lab Node Index
    Author: Sean Hinds
    Date: 11/16/17
    Description: This node.js app serves as the index for the
        node express handlebars templating engine used to serve
        views for the Brew Lab website.
*******************************************************************************************/


// import express and store in variable. Store express.express() in app variable

var express = require('express');
var app = express();

// default layout is main.hbs

var handlebars = require('express-handlebars').create({defaultLayout:'main'});


// for running node server locally for development. App uses port 5000

app.set('port', (process.env.PORT || 5000));


// the app will look for all static files in public/

app.use(express.static(__dirname + '/public'));


// import MySQL pool 

 var mysql = require('./public/js/dbConfig.js');


// views is directory for all template files

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


// render the home page if no url appendage

app.get('/', function(request, response) {
    response.render('home');
});

app.get('/table', function(req, res, next) {
    
    console.log('request received');
    var context = {};
    mysql.pool.query("DROP TABLE IF EXISTS recipes", function(err) {
        console.log('in1');
        var createString = "CREATE TABLE recipes(" + 
            "id INT PRIMARY KEY AUTO_INCREMENT," + 
            "name VARCHAR(255) NOT NULL," + 
            "url VARCHAR(255) NOT NULL)";
        mysql.pool.query(createString, function(err) {
            context.results = "Table reset";
            console.log("Table reset");
        });
    }); 
});

// render the home page when redirected to homepage

app.get('/home', function(request, response) {
    response.render('home');
});


// render the about page

app.get('/about', function(request, response) {
    response.render('about');
});


// render the beerStyle page

app.get('/beerStyle', function(request, response) {
    response.render('beerStyle');
});


// render the contact page

app.get('/contact', function(request, response) {
    response.render('contact');
});


// render the equipment page

app.get('/equipment', function(request, response) {
    response.render('equipment');
});


// render the process page

app.get('/process', function(request, response) {
    response.render('process');
});


// render the references page

app.get('/references', function(request, response) {
    response.render('references');
});


// render the resources page

app.get('/resources', function(request, response) {
    response.render('resources');
});


// render the 404 resource not found page

app.use(function(request, response) {
    response.status(404);
    response.render('404');
});


// render the 500 page for server errors

app.use(function(error, request, response, next) {
    console.error(err.stack);
    response.type('plain/text');
    response.status(500);
    response.render('500');
});

app.get('/create-table', function(req, res, next) {
    
   /* console.log('request received');
    var context = {};
    mysql.pool.query("DROP TABLE IF EXISTS recipes", function(err) {
        console.log('in1');
        var createString = "CREATE TABLE recipes(" + 
            "id INT PRIMARY KEY AUTO_INCREMENT," + 
            "name VARCHAR(255) NOT NULL," + 
            "url VARCHAR(255) NOT NULL)";
        mysql.pool.query(createString, function(err) {
            context.results = "Table reset";
            console.log("Table reset");
        });
    }); */

    res.render('table');
});


// display a string on the node console to verify that the app server is running

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
