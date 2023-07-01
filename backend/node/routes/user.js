const pool = require('../connection')
const bcrypt = require('bcrypt')

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
    app.post('/user/create', (req, res) => { console.log("CHECK:", req.body.username,req.body.password, req.body.email, req.body.grade, req.body.school,req.body.major, req.body.gradDate);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there's an issue obtaining a connection, release the connection instance & log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                const username = req.body.username
                const email = req.body.email
                const hashpass = req.body.password
                const grade = req.body.grade
                const school = req.body.school
                const major = req.body.major
                const gradDate = req.body.gradDate

                // Hash the password
                const saltRounds = 10;
                bcrypt.hash(hashpass, saltRounds, function(err, hash) {
                    connection.query('INSERT INTO `campusplus`.`user` (username, password, email, grade, school, major, gradDate) VALUES(?, ?, ?, ?, ?, ?, ?)',[username, hashpass, email, grade, school, major, gradDate], function (err, rows, fields) {
                        if (err) { 
                            // if there's an error w/ the query, release the connection instance & log the error
                            connection.release()
                            logger.error("Error while creating account (email, password, username): \n", err); 
                            res.status(400).json({
                                "data": [],
                                "error": "MySQL error"
                            })
                        } else{
                            res.status(201).json({
                                "data": rows
                            });
                        }
                    });
                })
            }
        });
    });

    /*
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
    */

    // POST /user/login
    app.post('/user/login', (req, res) => {
        console.log(req.body.username, req.body.password);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
            // if there is an issue obtaining a connection, release the connection instance and log the error
            logger.error('Problem obtaining MySQL connection',err)
            res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // if there is no issue obtaining a connection, execute query and release connection
                const username = req.body.username
                const hashpass = req.body.password

                connection.query('SELECT u.password, u.userID FROM `campusplus`.`user` u WHERE u.username = ?', [username], function (err, rows, fields) {
                    if (err) { 
                        // if there's an error w/ the query, release the connection instance & log the error
                        connection.release()
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else {
                        bcrypt.compare(hashpass, rows[0].password, function (err, result) {
                            if(err){
                                connection.release()
                                logger.error("Error while logging in w/ user: \n", err); 
                                //res.status(400).json({message: "Wrong Credentials"})
                                res.status(400).json({
                                    "data": [],
                                    "error": "MySQL error"
                                    //message: "Wrong Credentials!"
                                })
                                //res.send({message: "Wrong Credentials"})
                            }
                            if(result){
                                console.log("Username:", username, "\tPassword:", hashpass, "\tSavedHash:", rows[0].password)
                                console.log("Correct! Hash matches w/ plain text (UserID:", rows[0].userID, ")")

                                connection.query('SELECT IF(EXISTS(SELECT * FROM `campusplus`.`user` u WHERE u.username = ? AND u.password = ?), (SELECT u.username AS result FROM `campusplus`.`user` u WHERE u.password = ?), 0) AS result', [username, rows[0].password, rows[0].password], function (err2, rows2, fields2) {
                                    connection.release()
                                    if (err2) {
                                        logger.error("Error while executing Query");
                                        res.status(400).json({
                                            "data": [],
                                            "error": "MySQL error"
                                        })
                                    } else {
                                        res.status(201).json(rows2[0].result);
                                    }
                                });
                            }
                            else {
                                connection.release()
                                logger.error("Error while logging in w/ user: \n", err); 
                                //res.status(400).json({message: "Wrong Credentials"})
                                res.status(401).json({
                                    "data": [],
                                    "error": "MySQL error"
                                    //message: "Wrong Credentials!"
                                })
                                //res.send({message: "Wrong Credentials"})
                            }
                        })
                    }
                })
            }
        });
    });

    /*
    // POST /user/login
    app.post('/user/login', (req, res) => {
        console.log("/user/login --> ", req.body.username, req.body.password)
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there's an issue obtaining a connection, release the connection instance & log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // if there's no issue obtaining a connection, execute query & release connection
                var username = req.body.username
                var hashpass = req.body.password


                connection.query('SELECT u.password, u.userID FROM `campusplus`.`user` u WHERE u.username = ?', [username], function (err, rows, fields) {
                    if (err) { 
                        // if there's an error w/ the query, release the connection instance & log the error
                        connection.release()
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else {
                        //res.status(200).sendStatus(rows[0].result);
                        bcrypt.compare(req.body.password, rows[0].password, function (err, result) {
                            console.log("Username:", username, "\tPassword:", hashpass, "\tSavedHash:", rows[0].password)
                            if(result){
                                console.log("Correct! Hash matches w/ plain text (UserID:", rows[0].userID, ")")
                                //res.status(201).json(rows[0].username)
                                res.status(201).sendStatus(rows[0].userID)
                                //res.status(201).send(rows[0].result)
                            }
                            else {
                                logger.error("Error while logging in w/ user: \n", err); 
                                //res.status(400).json({message: "Wrong Credentials"})
                                res.status(400).json({
                                    "data": [],
                                    "error": "MySQL error"
                                    //message: "Wrong Credentials!"
                                })
                                //res.send({message: "Wrong Credentials"})
                            }
                        })
                    }
                })
                



                // Hash password
                const saltRounds = 10;
                bcrypt.hash(hashpass, saltRounds, function(err, hash) {
                    connection.query('SELECT IF(EXISTS(SELECT * FROM `campusplus`.`user` u WHERE u.username = ? AND u.password = ?), (SELECT u.username, AS result FROM `campusplus`.`user` u WHERE u.password = ?), 0) AS result', [username, hashpass, hashpass], function (err, rows, fields) {
                    //connection.query('SELECT u.password, u.userID FROM `campusplus`.`user` u WHERE u.username = ?', [username], function (err, rows, fields) {
                            if (err) { 
                                // if there's an error w/ the query, release the connection instance & log the error
                                connection.release()
                                res.status(400).json({
                                    "data": [],
                                    "error": "MySQL error"
                                })
                            } else {

                                //res.status(200).sendStatus(rows[0].result);
                                bcrypt.compare(req.body.password, rows[0].password, function (err, result) {
                                    console.log("Username:", username, "\tPassword:", hashpass, "\tSavedHash:", rows[0].password)
                                    if(result){
                                        console.log("Correct! Hash matches w/ plain text (UserID:", rows[0].userID, ")")
                                        //res.status(201).json(rows[0].username)
                                        res.status(201).sendStatus(rows[0].userID)
                                        //res.status(201).send(rows[0].result)
                                    }
                                    else {
                                        logger.error("Error while logging in w/ user: \n", err); 
                                        //res.status(400).json({message: "Wrong Credentials"})
                                        res.status(400).json({
                                            "data": [],
                                            "error": "MySQL error"
                                            //message: "Wrong Credentials!"
                                        })
                                        //res.send({message: "Wrong Credentials"})
                                    }
                                })
                            }
                        });
                })
            }
        });
    });
    */


    /*
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
                //SELECT IF(EXISTS(SELECT * FROM `campusplus`.`user` u WHERE u.username = 'user' AND u.password = '$2b$10$CmrDR3YvdkT7Xpd7XYc/F.eD2MH8NU.mJewWsu7bLXxh1WX4JCXtW'), (SELECT u.username AS result FROM `campusplus`.`user` u WHERE u.password = '$2b$10$CmrDR3YvdkT7Xpd7XYc/F.eD2MH8NU.mJewWsu7bLXxh1WX4JCXtW'), 0) AS result;
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
    */

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
                let hashpass = req.body.password
                let username = req.body.username
                
                const saltRounds = 10;
                bcrypt.hash(hashpass, saltRounds, function(err, hash) {
                    connection.query('UPDATE `campusplus`.`user` u SET u.password = ? WHERE u.username = ?', [hashpass, username], function(err, result, fields) {
                        // if there is an error with the query, release the connection instance and log the error
                        connection.release()
                        if (err) throw err
                        res.end(JSON.stringify(result))
                    });
                })
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