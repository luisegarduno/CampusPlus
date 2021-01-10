const pool = require('../connection')

module.exports = function user(app, logger) {

    // GET /user/
    app.get('/user/', (req, res) => {
        console.log(req.query.username)
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var username = req.query.username
                // if there is no issue obtaining a connection, execute query and release connection
                connection.query("SELECT * FROM `campusplus`.`user` u WHERE u.username = ?", [username], (err, rows) => {
                    connection.release();
                    if (err) {
                        logger.error("Error while fetching values: \n", err);
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

    // POST /user/create
    app.post('/user/create', (req, res) => {
        console.log(req.body.username,req.body.password, req.body.email, req.body.grade, req.body.school,req.body.major, req.body.gradDate);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var username = req.body.username
                var password = req.body.password
                var email = req.body.email
                var grade = req.body.grade
                var school = req.body.school
                var major = req.body.major
                var gradDate = req.body.gradDate
                // if there is no issue obtaining a connection, execute query
                connection.query('INSERT INTO `campusplus`.`user` (username, password, email, grade, school, major, gradDate) VALUES(?, ?, ?, ?, ?, ?, ?)',[username, password, email, grade, school, major, gradDate], function (err, rows, fields) {
                    if (err) { 
                        // if there is an error with the query, release the connection instance and log the error
                        connection.release()
                        logger.error("Error while creating user: \n", err); 
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else{
                        res.status(200).json({
                            "data": rows
                        });
                    }
                });
            }
        });
    });

    // POST /user/login
    app.post('/user/login', (req, res) => {
        console.log(req.body.username,req.body.password);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
            // if there is an issue obtaining a connection, release the connection instance and log the error
            logger.error('Problem obtaining MySQL connection',err)
            res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // if there is no issue obtaining a connection, execute query and release connection
                const username = req.body.username
                const password = req.body.password
                connection.query('SELECT IF(EXISTS(SELECT * FROM `campusplus`.`user` u WHERE u.username = ? AND u.password = ?), (SELECT u.username AS result FROM `campusplus`.`user` u WHERE u.password = ?), 0) AS result', [username, password, password], function (err, rows, fields) {
                    // if there is an error with the query, release the connection instance and log the error
                    connection.release()
                    if (err) {
                        logger.error("Error while executing Query");
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else {
                        res.status(200).send(rows[0].result);
                    }
                });
            }
        });
    });

    // GET /user/:userID
    app.get('/user/:userID', (req, res) => {
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
                connection.query('SELECT * FROM `campusplus`.`user` u WHERE u.userID = ?', [userID], function (err, rows, fields) {
                    // if there is an error with the query, release the connection instance and log the error
                    connection.release()
                    if (err) {
                        logger.error("Error while fetching values: \n", err);
                        res.status(400).json({
                            "data": [],
                            "error": "Error obtaining values"
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

    // PUT /user/
    app.put('/user/', async(req, res) => {
        console.log(req.body.password,req.body.username);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // if there is no issue obtaining a connection, execute query and release connection
                let password = req.body.password
                let username = req.body.username
                connection.query('UPDATE `campusplus`.`user` u SET u.password = ? WHERE u.username = ?', [password, username], function(err, result, fields) {
                    // if there is an error with the query, release the connection instance and log the error
                    connection.release()
                    if (err) throw err
                    res.end(JSON.stringify(result))
                });
            }
        });
    });

    // PUT /user/:userID/updateProfile
    app.put('/user/:userID/updateProfile', (req, res) => {
        console.log(req.params.userID,req.body.grade,req.body.school,req.body.gradDate);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // if there is no issue obtaining a connection, execute query and release connection
                var userID = req.params.userID
                var grade = req.body.grade
                var school = req.body.school
                var major = req.body.major
                var gradDate = req.body.gradDate

                connection.query("UPDATE user SET grade = ?, school = ?, major = ?, gradDate = ? WHERE userID = ?", [grade, school, major, gradDate, userID], (err, rows) => {
                    // if there is an error with the query, release the connection instance and log the error
                    connection.release()
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

    // PUT /user/:userID/updateEmail
    app.put('/user/:userID/updateEmail', (req, res) => {
        console.log(req.params.userID,req.body.email);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // if there is no issue obtaining a connection, execute query and release connection
                var userID = req.params.userID
                var email = req.body.email
                connection.query("UPDATE `campusplus`.`user` u SET u.email = ? WHERE u.userID = ?", [email, userID], (err, rows) => {
                    // if there is an error with the query, release the connection instance and log the error
                    connection.release()
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

//    app.get('/user/recover', (req, res) => {
//        console.log(req.params.userID);
//        // obtain a connection from our pool of connections
//        pool.getConnection(function (err, connection){
//            if(err){
//                // if there is an issue obtaining a connection, release the connection instance and log the error
//                logger.error('Problem obtaining MySQL connection',err)
//               res.status(400).send('Problem obtaining MySQL connection'); 
//           } else {
//                // if there is no issue obtaining a connection, execute query and release connection
//                var email = req.body.email
//                connection.query("SELECT * FROM user WHERE email = ?", [email], (err, rows) => {
//                    // if there is an error with the query, release the connection instance and log the error
//                    connection.release()
//                    if (err) {
//                        logger.error("Error while executing Query: \n", err);
//                        res.status(400).json({
//                            "data": [],
//                            "error": "MySQL error"
//                        })
//                    } else {
//                        res.status(200).json(rows)
//                    }
//                });
//            }
//        });
//    });

    // DELETE /user/:userID
    app.delete('/user/:userID', (req, res) => {
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
                connection.query("DELETE FROM user WHERE userID = ?", [userID], (err, rows) => {
                    // if there is an error with the query, release the connection instance and log the error
                    connection.release()
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

}