const router = require('express').Router()
const logger = require('@rama41222/node-logger/src/logger')
const connection = require('../connection')

router.post('/', async (req, res) => {
  var username = req.param('username')
  var password = req.param('password')     // Set up table to have an auto increment primary key
  connection.query("INSERT INTO user (username, password) VALUES(?, ?)", [username, password], function (err, rows, fields) {
    if (err) {
      logger.error("Error while executing Query: \n", err)
      res.status(400).json({
        "data": [],
        "error": "MySQL error"
      })
    }
    else{
      res.status(200).json({
        "data": rows
      })
    }
  })
})

router.get('/', (req, res) => {
  connection.query('SELECT * FROM user', function (err, rows, fields) {
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
      })
    }
  })
})

router.get('/:username', function (req, res) {
  var username = req.params.username;
  connection.query('SELECT * FROM user WHERE username = ?', [username], function (err, rows, fields) {
    if (err) {
      logger.error("Error while executing Query: \n", err)
      res.status(400).json({
        "data": [],
        "error": "MySQL error"
      })
    }
    else{
      res.status(200).json({
        "data": rows
      })
    }
  })
})

router.put('/:username', async (req, res) => {
  let password = req.body.password
  let username = req.params.username
  connection.query('UPDATE user SET password = ? WHERE username = ?', [password, username], function (err, result, fields) {
    if (err) throw err
    res.end(JSON.stringify(result))      // Result in JSON format
    });
});

router.post('/login', async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  connection.query("SELECT COUNT(*) AS users_count FROM user WHERE username = ? AND PASSWORD = ?", [username, password], (err, rows) => {
    if (err) {
      logger.error("Error while executing Query: \n", err)
      res.status(400).json({
        "data": [],
        "error": "MySQL error"
      })
    }
    else{
      const accountExists = rows[0]['users_count'] > 0
      res.status(200).json(accountExists)
    }
  })
})

module.exports = router