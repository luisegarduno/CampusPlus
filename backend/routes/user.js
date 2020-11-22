const router = require('express').Router()
const connection = require('../connection')
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

// create a logger object.  Using logger is preferable to simply writing to the console.
const logger = log({ console: true, file: false});

router.get('/', (req, res) => {
    const username = req.query.username

    connection.query("SELECT * FROM `canvasplus`.`user` WHERE u.username = ?", [username], (err, rows) => {
        if (err) {
            logger.error("Error while executing Query: \n", err);
            res.status(400).json({
                "data": [],
                "error": "MySQL error"
            })
        } else {
            res.status(200).json(rows)
        }
    })
})

router.get('/user-assignment/:userID', (req, res) => {
    var uID = req.params.userID

    connection.query('SELECT * from `canvasplus`.`assignment` a join `canvasplus`.`user-assignment` ua on a.assignmentID = ua.assignmentID where ua.userID = ?', [uID], (err, rows) => {
        if (err) {
            logger.error("Error while executing Query: \n", err);
            res.status(400).json({
                "data": [],
                "error": "MySQL error"
            })
        } else {
            res.status(200).json(rows)
        }
    })
})

router.get('/class/:classID', (req, res) => {
    var uID = req.params.classID

    connection.query('SELECT * from `canvasplus`.`class` c where c.classID = ?', [cID], (err, rows) => {
        if (err) {
            logger.error("Error while executing Query: \n", err);
            res.status(400).json({
                "data": [],
                "error": "MySQL error"
            })
        } else {
            res.status(200).json(rows)
        }
    })
})

router.put('/', async(req, res) => {
    let password = req.body.password
    let username = req.body.username
    connection.query('UPDATE `canvasplus`.`user` SET password = ? WHERE username = ?', [password, username], function(err, result, fields) {
        if (err) throw err
        res.end(JSON.stringify(result))
    })
});

router.post('/create', async(req, res) => {
    const username = req.body.username
    const password = req.body.password

    connection.query("INSERT INTO `canvasplus`.`user` (username, password) VALUES(?, ?)", [username, password], (err) => {
        if (err) {
            logger.error("Error while executing Query: \n", err)
            res.status(400).json({
                "data": [],
                "error": "MySQL error"
            })
        } else {
            res.status(200).json("Account Created")
        }
    })
})

router.post('/login', async(req, res) => {
    const username = req.body.username
    const password = req.body.password

    connection.query("SELECT COUNT(*) AS users_count FROM `canvasplus`.`user` u WHERE u.username = ? AND u.PASSWORD = ?", [username, password], (err, rows) => {
        if (err) {
            logger.error("Error while executing Query: \n", err)
            res.status(400).json({
                "data": [],
                "error": "MySQL error"
            })
        } else {
            const accountExists = rows[0]['users_count'] > 0
            res.status(200).json(accountExists)
        }
    })
})

module.exports = router