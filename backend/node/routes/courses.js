const pool = require('../connection')

module.exports = function courses(app, logger) {


    app.get('/courses', (req, res) => {
    console.log(req.params.userID);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          connection.query('SELECT * FROM `campusplus`.`course` c', (err, rows) => {
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

  app.get('/courses/:courseID', (req, res) => {
    console.log(req.params.commentID);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          var cID = req.params.courseID

          connection.query('SELECT * FROM `campusplus`.`course` c WHERE c.courseID = ?', [cID], (err, rows) => {
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

  app.get('/courses/user/:userID', (req, res) => {
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

          connection.query('SELECT c.courseID, c.courseDaysID, c.description,c.yearOffered, c.seasonOffered, c.courseTimeStart, c.courseTimeEnd FROM `campusplus`.`course` c JOIN `campusplus`.`schedule` s ON c.courseID = s.courseID WHERE s.userID = ?;', [uID], (err, rows) => {
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

  app.post('/courses/:userID', async (req, res) => {
    console.log(req.params.commentID);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var courseID = req.body('courseID')
          connection.query('INSERT INTO schedule (userID, courseID) VALUES(?, ?)',[req.params.userID, courseID], function (err, rows, fields) {
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


  app.delete('/courses/:userID/:courseID', async (req, res) => {
    console.log(req.params.userID,req.params.courseID)
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var userID = req.params.userID;
          var courseID = req.params.courseID;

          connection.query('DELETE FROM schedule WHERE userID = ? AND courseID = ?', [userID, courseID], function (err, result, fields) {
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