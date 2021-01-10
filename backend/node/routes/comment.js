const pool = require('../connection')

module.exports = function comment(app, logger) {

  // GET /comment/
  app.get('/comment/', (req, res) => {
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
        // if there is no issue obtaining a connection, execute query and release connection
        connection.query('SELECT * FROM `canvasplus`.`comment`', function (err, rows, fields) {
            // if there is an error with the query, release the connection instance and log the error
            connection.release();
          if (err) {
            logger.error("Error while fetching values: \n", err);
            res.status(400).json({
              "data": [],
              "error": "MySQL error"
            })
          } else {
            res.status(200).json({
              "data": rows
            });
          }
        });
      }
    });
  });

  // GET /comment/:commentID
  app.get('/comment/:commentID', function (req, res) {
    console.log(req.params.commentID)
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
        var commentID = req.params.commentID
        // if there is no issue obtaining a connection, execute query and release connection
        connection.query('SELECT * FROM `canvasplus`.`comment` c where c.commentID = ?', [commentID], function (err, rows, fields) {
            // if there is an error with the query, release the connection instance and log the error
            connection.release();
          if (err) {
            logger.error("Error while fetching values: \n", err);
            res.status(400).json({
              "data": [],
              "error": "MySQL error"
            })
          } else {
            res.status(200).json({
              "data": rows
            });
          }
        });
      }
    });
  });

  // GET /comment/user/:userID
  app.get('/comment/user/:userID', function (req, res) {
    console.log(req.params.userID)
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
        var userID = req.params.userID
        // if there is no issue obtaining a connection, execute query and release connection
        connection.query('SELECT * FROM `canvasplus`.`comment` c where c.userID = ?', [userID], function (err, rows, fields) {
            // if there is an error with the query, release the connection instance and log the error
            connection.release();
          if (err) {
            logger.error("Error while fetching values: \n", err);
            res.status(400).json({
              "data": [],
              "error": "MySQL error"
            })
          } else {
            res.status(200).json({
              "data": rows
            });
          }
        });
      }
    });
  });

  // GET /comment/:commentID
  app.get('/comment/class/:classID', function (req, res) {
    console.log(req.params.classID)
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
        var classID = req.params.classID
        // if there is no issue obtaining a connection, execute query and release connection
        connection.query('SELECT * FROM `canvasplus`.`comment` c where c.classID = ?', [classID], function (err, rows, fields) {
            // if there is an error with the query, release the connection instance and log the error
            connection.release();
          if (err) {
            logger.error("Error while fetching values: \n", err);
            res.status(400).json({
              "data": [],
              "error": "MySQL error"
            })
          } else {
            res.status(200).json({
              "data": rows
            });
          }
        });
      }
    });
  });

  // POST /comment/:userID/:classID
  app.post('/comment/:userID/:classID', function (req, res) {
    console.log(req.params.userID, req.params.classID, req.body.title, req.body.body);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
        // if there is no issue obtaining a connection, execute query and release connection
        var userID = req.params.userID
        var classID = req.params.classID
        var title = req.body.title
        var body = req.body.body
        connection.query('INSERT INTO `canvasplus`.`comment` (userID, classID, title, body, postTime) VALUES (?, ?, ?, ?, NOW())', [userID, classID, title, body], function (err, rows, fields) {
            // if there is an error with the query, release the connection instance and log the error
            connection.release();
          if (err) {
            logger.error("Error while inserting values: \n", err)
            res.status(400).json({
              "data": [],
              "error": "MySQL error"
            })
          } else {
              res.status(200).json({
                "data": rows
              })
            }
        });
      }
    });
  });

      // PUT /comment/:commentID/title
  app.put('/comment/:commentID/title', function (req, res) {
    console.log(req.params.commentID, req.body.title);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
        // if there is no issue obtaining a connection, execute query and release connection
        var commentID = req.params.commentID
        var title = req.body.title
        connection.query('UPDATE `canvasplus`.`comment` c SET c.title = ? WHERE c.commentID = ?', [title, commentID], function (err, rows, fields) {
            // if there is an error with the query, release the connection instance and log the error
            connection.release();
          if (err) {
            logger.error("Error while updating values: \n", err)
            res.status(400).json({
              "data": [],
              "error": "MySQL error"
            })
          } else {
              res.status(200).json({
                "data": rows
              })
            }
        });
      }
    });
  });

  // PUT /comment/:commentID/body
  app.put('/comment/:commentID/body', function (req, res) {
    console.log(req.params.commentID, req.body.body);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
        // if there is no issue obtaining a connection, execute query and release connection
        var commentID = req.params.commentID
        var body = req.body.body
        connection.query('UPDATE `canvasplus`.`comment` c SET c.body = ? WHERE c.commentID = ?', [body, commentID], function (err, rows, fields) {
            // if there is an error with the query, release the connection instance and log the error
            connection.release();
          if (err) {
            logger.error("Error while updating values: \n", err)
            res.status(400).json({
              "data": [],
              "error": "MySQL error"
            })
          } else {
              res.status(200).json({
                "data": rows
              })
            }
        });
      }
    });
  });

  // DELETE /comment/:commentID
  app.delete('/comment/:commentID', function (req, res) {
    console.log(req.params.commentID);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
        // if there is no issue obtaining a connection, execute query and release connection
        var commentID = req.params.commentID
        connection.query('DELETE FROM `canvasplus`.`comment` c WHERE c.commentID = ?', [commentID], function (err, rows, fields) {
            // if there is an error with the query, release the connection instance and log the error
            connection.release();
          if (err) {
            logger.error("Error while deleting values: \n", err)
            res.status(400).json({
              "data": [],
              "error": "MySQL error"
            })
          } else {
              res.status(200).json({
                "data": rows
              })
            }
        });
      }
    });
  });
}