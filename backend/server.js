require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

// *****************************************************

var db_config = {
  host: process.env.MYSQL_CLOUD_HOST,
  user: process.env.MYSQL_CLOUD_USER,
  password: process.env.MYSQL_CLOUD_PASS,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DB
};

var connection;

// set up some configs for express.
const config = {
  name: 'sample-express-app',
  port: 8000,
  host: '0.0.0.0',
};

// create the express.js object
const app = express();

// create a logger object.  Using logger is preferable to simply writing to the console.
const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(ExpressAPILogMiddleware(logger, { request: true }));


// *****************************************************
function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since the old one cannot be reused

  connection.connect(function(err) {              // The server is either down or restarting (takes a while sometimes).
    if(err) {
      logger.error("Cannot connect to DB!");
      console.log('Error when connecting to DB:', err);
      setTimeout(handleDisconnect, 2000); // Introduce a delay before attempting to reconnect, to avoid a hot loop, & to allow node script to 
    }
    else{
      logger.info("Connected to the DB!");
    }
  });

  connection.on('error', function(err) {
    console.log('DB error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually lost due to either server restart or
      handleDisconnect();                         // a connection idle timeout (the wait_timeout server variable configures this)
    } else {
      throw err;
    }
  });
}

handleDisconnect();
// *****************************************************


// GET /
app.get('/', (req, res) => {
  res.status(200).send('Go to 0.0.0.0:3000.');
});

// get list of users
app.get('/getUser', (req, res) => {
  connection.query('SELECT * FROM `canvasplus`.`user`', function (err, rows, fields) {
    if (err) {
      logger.error("Error while executing Query: \n", err);
      res.status(400).json({
        "data": [],
        "error": "MySQL error"
      })
    }
    else{
      res.status(200).json({
        "data": rows
      });
    }
  });
});

// GET
// /api/getit
// app.get('/assignment/:assignmentID', function (req, res) {
// 	con.query(`SELECT * FROM `canvasplus`.assignment where assingmentID = ${req.params.assignmentID}`, function (err, result, fields) {
// 		if (err) throw err;
// 		res.end(JSON.stringify(result)); // Result in JSON format
// 	});
// });

//GET
// /api/username
//app.get('/user/:username', function (req, res) {
//	con.query(`SELECT * FROM user WHERE username = ${req.params.username}`, function (err, result, fields) {
//		if (err) throw err;
//		res.end(JSON.stringify(result)); // Result in JSON format
//	});
// });

// POST
// /api/postit	
// app.post('/user', async (req, res) => {
// 	var username = req.param('username');
// 	var password = req.param('password');//set up table to have an auto increment primary key
// 	con.query("INSERT INTO user (username, password) VALUES( ?, ?)",
// 		[username, password], function (err, result, fields) {
// 			if (err) throw err;
// 			res.end(JSON.stringify(result)); // Result in JSON format
// 		});
// });


// POST
// /api/postit	
//app.post('/assignment', async (req, res) => {
//	var classID = req.param('classID');
//	var description = req.param('description');
//	var dueDate = req.param('dueDate');
//	var assignmentType = req.param('assignmentType');
//
//	con.query("INSERT INTO assignment (classID, description, dueDate, assignmentType) VALUES(?, ?, ?, ?)",
//		[classID, description, dueDate, assignmentType], function (err, result, fields) {
//			if (err) throw err;
//			res.end(JSON.stringify(result)); // Result in JSON format
//		});
//});

// /api/put
// app.put('/user/:username', async (req, res) => {
// 	var password = req.body.password;
// 	con.query(`UPDATE user SET password = ? WHERE username = ${req.params.username}`, password, function (err, result, fields) {
// 		if (err) throw err;
// 		res.end(JSON.stringify(result)); // Result in JSON format
// 	});
// });

// /api/put
// app.put('/office/:officeCode', async (req, res) => {
// 	var ci = req.body.city;
// 	con.query("UPDATE offices SET city = ? WHERE officeCode = ?", [ci, req.params.officeCode], function (err, result, fields) {
// 		if (err) throw err;
// 		res.end(JSON.stringify(result)); // Result in JSON format
// 	});
// });

// DELETE
// /api/deleteit
// app.delete('/customer/:customerNumber', async (req, res) => {
// 	con.query("DELETE FROM customers WHERE `canvasplus`.customerNumber = ? ", req.params.customerNumber, function (err, result, fields) {
// 		if (err)
// 			return console.error(error.message);
// 		res.end(JSON.stringify(result));
// 	});
// });

// app.delete('/assignment/:assignmentID', async (req, res) => {
// 	con.query("DELETE FROM `canvasplus`.assignment WHERE assignmentID = ? ", req.params.assignmentID, function (err, result, fields) {
// 		if (err)
// 			return console.error(error.message);
// 		res.end(JSON.stringify(result));
// 	});
// });

// connecting the express object to listen on a particular port as defined in the config object.
app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error('Internal Server Error');
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});

