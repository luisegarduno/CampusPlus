const pool = require('../connection')

module.exports = function assignment(app, logger) {

  app.get('/assignment/:assignmentID', function (req, res) {
    console.log(req.params.assignmentID);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var assignmentID = req.params.assignmentID
          connection.query('SELECT * FROM `canvasplus`.`assignment` a where a.assignmentID = ?', [assignmentID], function (err, rows, fields) {
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


  app.get('/assignment/user/:userID', function (req, res) {
    console.log(req.params.userID);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var userID = req.params.userID
          connection.query('SELECT * FROM `canvasplus`.`assignment` a WHERE a.userID = ? order by a.dueDate', [userID], function (err, rows, fields) {
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

  app.get('/assignment/:userID/class/:classID', function (req, res) {
    console.log(req.params.userID,req.params.classID);
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
          connection.query('SELECT * FROM `canvasplus`.`assignment` a WHERE a.userID = ? AND a.classID = ? order by a.dueDate', [userID, classID], function (err, rows, fields) {
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

  app.get('/assignment/:userID/type/:assignmentType', function (req, res) {
    console.log(req.params.userID,req.params.assignmentType);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var userID = req.params.userID
          var assignmentType = req.params.assignmentType
          connection.query('SELECT * FROM `canvasplus`.`assignment` a WHERE a.userID = ? AND a.assignmentType = ? order by a.dueDate', [userID, assignmentType], function (err, rows, fields) {
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

  app.get('/assignment/:userID/completion/:completionStatus', function (req, res) {
    console.log(req.params.userID,req.params.completionStatus);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var userID = req.params.userID
          var completionStatus = req.params.completionStatus
          connection.query('SELECT * FROM `canvasplus`.`assignment` a WHERE a.userID = ? AND a.completionStatus = ? order by a.dueDate', [userID, completionStatus], function (err, rows, fields) {
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



  app.post('/assignment/:userID/:classID/', async (req, res) => {
    console.log(req.params.userID, req.params.classID, req.body.name, req.body.description, req.body.dueDate, req.body.assignmentType);
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
          var name = req.body.name
          var description = req.body.description
          var dueDate = req.body.dueDate
          var assignmentType = req.body.assignmentType

          connection.query('INSERT INTO `canvasplus`.`assignment` (userID, classID, name, description, dueDate, assignmentType, completionStatus) VALUES(?, ?, ?, ?, ?, ?, 0)',
          [userID, classID, name, description, dueDate, assignmentType], function (err, rows, fields) {
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

  app.put('/assignment/:assignmentID/name', function (req, res) {
    console.log(req.params.assignmentID,req.body.name);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var assignmentID = req.params.assignmentID
          var name = req.body.name
          connection.query('UPDATE `canvasplus`.`assignment` a SET a.name = ? WHERE a.assignmentID = ?', [name, assignmentID], function (err, rows, fields) {
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

  app.put('/assignment/:assignmentID/desc', function (req, res) {
    console.log(req.params.assignmentID,req.body.desc);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var assignmentID = req.params.assignmentID
          var description = req.body.desc
          connection.query('UPDATE `canvasplus`.`assignment` a SET a.description = ? WHERE a.assignmentID = ?', [description, assignmentID], function (err, rows, fields) {
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

  app.put('/assignment/:assignmentID/date', function (req, res) {
    console.log(req.params.assignmentID,req.body.dueDate);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var assignmentID = req.params.assignmentID
          var dueDate = req.body.dueDate
          connection.query('UPDATE `canvasplus`.`assignment` a SET a.dueDate = ? WHERE a.assignmentID = ?', [dueDate, assignmentID], function (err, rows, fields) {
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

  app.put('/assignment/:assignmentID/type', function (req, res) {
    console.log(req.params.assignmentID,req.body.assignmentType);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var assignmentID = req.params.assignmentID
          var assignmentType = req.body.assignmentType
          connection.query('UPDATE `canvasplus`.`assignment` a SET a.assignmentType = ? WHERE a.assignmentID = ?', [assignmentType, assignmentID], function (err, rows, fields) {
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

  app.put('/assignment/:assignmentID/completion', function (req, res) {
    console.log(req.params.assignmentID,req.body.completionStatus);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var assignmentID = req.params.assignmentID
          var completionStatus = req.body.completionStatus
          connection.query('UPDATE `canvasplus`.`assignment` a SET a.completionStatus = ? WHERE a.assignmentID = ?', [completionStatus, assignmentID], function (err, rows, fields) {
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

  app.put('/assignment/:assignmentID', function (req, res) {
    console.log(req.params.assignmentID,req.body.completionStatus);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var assignmentID = req.params.assignmentID
          var name = req.params.name
          var description = req.body.description
          var dueDate = req.params.dueDate
          var assignmentType = req.body.assignmentType
          var completionStatus = req.body.completionStatus
          connection.query('UPDATE `canvasplus`.`assignment` a SET a.name = ?, a.description = ?, a.dueDate = ?, a.assignmentType = ?, a.completionStatus = ? WHERE a.assignmentID = ?', [name, description, dueDate, assignmentType, completionStatus, assignmentID], function (err, rows, fields) {
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

  app.delete('/assignment/:assignmentID', async (req, res) => {
    console.log(req.params.assignmentID);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if(err){
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection',err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
          // if there is no issue obtaining a connection, execute query and release connection
          var assignmentID = req.params.assignmentID;
          connection.query('DELETE FROM `canvasplus`.`assignment` a WHERE a.assignmentID = ?', [assignmentID], function (err, result, fields) {
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