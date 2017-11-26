var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host:     'us-cdbr-iron-east-05.cleardb.net',
	user:     'b3a90fb3ed8ef5',
	password: '1193d107',
	database: 'heroku_318ae3993b1809c'
});
module.exports.pool = pool;