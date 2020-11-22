const router = require('express').Router()
const logger = require('@rama41222/node-logger/src/logger')
const connection = require('../connection')

router.get('/', (req, res) => {
    const username = req.query.username

    connection.query("SELECT * FROM user WHERE username = ?", [username], (err, rows) => {
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

    connection.query('SELECT * from class where classID = ?', [cID], (err, rows) => {
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
    connection.query('UPDATE user SET password = ? WHERE username = ?', [password, username], function(err, result, fields) {
        if (err) throw err
        res.end(JSON.stringify(result))
    })
});

router.post('/create', async(req, res) => {
    const username = req.body.username
    const password = req.body.password

    connection.query("INSERT INTO user (username, password) VALUES(?, ?)", [username, password], (err) => {
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

    connection.query("SELECT COUNT(*) AS users_count FROM user WHERE username = ? AND PASSWORD = ?", [username, password], (err, rows) => {
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