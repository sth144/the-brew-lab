// copy this to your config file
var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host: '',
	user: '',
	password: '',
});
module.exports.pool = pool;