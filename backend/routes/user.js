const router = require('express').Router()
const connection = require('../connection')
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

// create a logger object.  Using logger is preferable to simply writing to the console.
const logger = log({ console: true, file: false});

router.get('/', (req, res) => {
    const username = req.body.username

    connection.query("SELECT * FROM `canvasplus`.`user` u WHERE u.username = ?", [username], (err, rows) => {
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

router.get('/:userID', (req, res) => {
    var userID = req.params.userID

    connection.query("SELECT * FROM user WHERE userID = ?", [userID], (err, rows) => {
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

// router.get('/recover', (req, res) => {
//     var email = req.body.email

//     connection.query("SELECT * FROM user WHERE email = ?", [email], (err, rows) => {
//         if (err) {
//             logger.error("Error while executing Query: \n", err);
//             res.status(400).json({
//                 "data": [],
//                 "error": "MySQL error"
//             })
//         } else {
//             res.status(200).json(rows)
//         }
//     })
// })


router.post('/create', async(req, res) => {
    var username = req.body.username
    var password = req.body.password
    var email = req.body.email
    var grade = req.body.grade
    var school = req.body.school
    var major = req.body.major
    var gradDate = req.body.gradDate

    connection.query("INSERT INTO `canvasplus`.`user` (username, password, email, grade, school, major, gradDate) VALUES(?, ?, ?, ?, ?, ?, ?)", [username, password, email, grade, school, major, gradDate], (err) => {
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

    connection.query("SELECT COUNT(*) AS users_count FROM `canvasplus`.`user` u WHERE u.username = ? AND u.password = ?", [username, password], (err, rows) => {
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

router.put('/', async(req, res) => {
    let password = req.body.password
    let username = req.body.username
    connection.query('UPDATE `canvasplus`.`user` u SET u.password = ? WHERE u.username = ?', [password, username], function(err, result, fields) {
        if (err) throw err
        res.end(JSON.stringify(result))
    })
});

router.put('/:userID/updateProfile', (req, res) => {
    var userID = req.params.userID
    var grade = req.body.grade
    var school = req.body.school
    var major = req.body.major
    var gradDate = req.body.gradDate

    connection.query("UPDATE user SET grade = ?, school = ?, major = ?, gradDate = ? WHERE userID = ?", [grade, school, major, gradDate, userID], (err, rows) => {
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

router.put('/:userID/updateEmail', (req, res) => {
    var userID = req.params.userID
    var email = req.body.email

    connection.query("UPDATE user SET email = ? WHERE userID = ?", [email, userID], (err, rows) => {
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

router.delete('/:userID', (req, res) => {
    var userID = req.params.userID

    connection.query("DELETE FROM user WHERE userID = ?", [userID], (err, rows) => {
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

module.exports = router