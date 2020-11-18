const router = require('express').Router()
const connection = require('../connection')

router.get('/:assignmentID', function (req, res) {
  var assignmentID = req.params.assignmentID
  connection.query('SELECT * FROM assignment a where assignmentID = ?', [assignmentID], function (err, rows, fields) {
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
  var classID = req.param('classID')
  var description = req.param('description')
  var dueDate = req.param('dueDate')
  var assignmentType = req.param('assignmentType')

  connection.query('INSERT INTO assignment (classID, description, dueDate, assignmentType) VALUES(?, ?, ?, ?)',
  [classID, description, dueDate, assignmentType], function (err, rows, fields) {
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

router.delete('/:assignmentID', async (req, res) => {
  var assignmentID = req.params.assignmentID;
  connection.query('DELETE FROM assignment WHERE assignmentID = ?', [assignmentID], function (err, result, fields) {
    if (err)
      return console.error(error.message)
    res.end(JSON.stringify(result))
  })
})

module.exports = router