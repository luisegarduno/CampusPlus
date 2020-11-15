const router = require('express').Router()
const connection = require('../connection')

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

router.put('/:username', async (req, res) => {
  var password = req.body.password
  var username = req.params.username
  connection.query('UPDATE user SET password = ? WHERE username = ?', [password, username], function (err, result, fields) {
    if (err) throw err
    res.end(JSON.stringify(result))      // Result in JSON format
    });
});

module.exports = router