const router = require('express').Router()
const logger = require('@rama41222/node-logger/src/logger')
const connection = require('../connection')

router.get('/:classID', (req, res) => {
    var cID = req.params.classID

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

router.get('/user/:userID', (req, res) => {
    var uID = req.params.userID

    connection.query('SELECT c.classID, c.classDaysID, c.description,c.yearOffered, c.seasonOffered, c.classTimeStart, c.classTimeEnd from class c join schedule s on c.classID = s.classID where s.userID = ?;', [uID], (err, rows) => {
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

router.post('/:userID', async (req, res) => {
    var classID = req.body('classID')
    connection.query('INSERT INTO schedule (userID, classID) VALUES(?, ?)',
    [req.params.userID, classID], function (err, rows, fields) {
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


  router.delete('/:userID/:classID', async (req, res) => {
    var userID = req.params.userID;
    var classID = req.params.classID;

    connection.query('DELETE FROM schedule WHERE userID = ? AND classID = ?', [userID, classID], function (err, result, fields) {
      if (err)
        return console.error(error.message)
      res.end(JSON.stringify(result))
    })
  })

module.exports = router