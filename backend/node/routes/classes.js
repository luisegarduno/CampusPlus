const pool = require('../connection')

module.exports = function classes(app, logger) {


    app.get('/classes', (req, res) => {
    console.log(req.params.userID);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          connection.query('SELECT * FROM `campusplus`.`class` c', (err, rows) => {
            // if there is an error with the query, release the connection instance and log the error
            connection.release();
            if (err) {
              logger.error("Error while executing Query: \n", err);
              res.status(400).json({
                "data": [],
                "error": "MySQL error"
              })
            } else {
                res.status(200).json(rows)
            }
          });
      }
    });
  });

  app.get('/classes/:classID', (req, res) => {
    console.log(req.params.commentID);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          var cID = req.params.classID

          connection.query('SELECT * FROM `campusplus`.`class` c WHERE c.classID = ?', [cID], (err, rows) => {
            connection.release();
            if (err) {
              logger.error("Error while executing Query: \n", err);
              res.status(400).json({
                "data": [],
                "error": "MySQL error"
              })
            } else {
                res.status(200).json(rows)
            }
          });
      }
    });
  });

  app.get('/classes/user/:userID', (req, res) => {
    console.log(req.params.userID);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var uID = req.params.userID

          connection.query('SELECT c.classID, c.classDaysID, c.description,c.yearOffered, c.seasonOffered, c.classTimeStart, c.classTimeEnd FROM `campusplus`.`class` c JOIN `campusplus`.`schedule` s ON c.classID = s.classID WHERE s.userID = ?;', [uID], (err, rows) => {
            // if there is an error with the query, release the connection instance and log the error
            connection.release();
            if (err) {
              logger.error("Error while executing Query: \n", err);
              res.status(400).json({
                "data": [],
                "error": "MySQL error"
              })
            } else {
                res.status(200).json(rows)
            }
          });
      }
    });
  });

  app.post('/classes/:userID', async (req, res) => {
    console.log(req.params.commentID);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var classID = req.body('classID')
          connection.query('INSERT INTO schedule (userID, classID) VALUES(?, ?)',[req.params.userID, classID], function (err, rows, fields) {
            // if there is an error with the query, release the connection instance and log the error
            connection.release();
            if (err) {
              logger.error("Error while executing Query: \n", err)
              res.status(400).json({
                "data": [],
                "error": "MySQL error"
              })
            } else{
                res.status(200).json({
                  "data": rows
                })
              }
            });
          }
      });
  });


  app.delete('/classes/:userID/:classID', async (req, res) => {
    console.log(req.params.userID,req.params.classID)
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var userID = req.params.userID;
          var classID = req.params.classID;

          connection.query('DELETE FROM schedule WHERE userID = ? AND classID = ?', [userID, classID], function (err, result, fields) {
            // if there is an error with the query, release the connection instance and log the error
            connection.release();
            if (err)
              return console.error(error.message)
            res.end(JSON.stringify(result))
          });
        }
    });
  });
}