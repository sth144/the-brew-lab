var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.get('/', function(request, response) {
    response.render('home');
});

app.get('/home.html', function(request, response) {
    response.render('home');
});

app.get('/about.html', function(request, response) {
    response.render('about');
});

app.get('/beerStyle.html', function(request, response) {
    response.render('beerStyle');
});

app.get('/contact.html', function(request, response) {
    response.render('contact');
});

app.get('/process.html', function(request, response) {
    response.render('process');
});

app.get('/references.html', function(request, response) {
    response.render('references');
});

app.get('/resources.html', function(request, response) {
    response.render('resources');
});

app.use(function(request, response) {
    response.status(404);
    response.render('404');
});

app.use(function(error, request, response, next) {
    console.error(err.stack);
    response.type('plain/text');
    response.status(500);
    response.render('500');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
