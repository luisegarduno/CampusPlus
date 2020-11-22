const router = require('express').Router()
const connection = require('../connection')

router.get('/:assignmentID', function (req, res) {
  var assignmentID = req.params.assignmentID
  connection.query('SELECT * FROM assignment where assignmentID = ?', [assignmentID], function (err, rows, fields) {
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

router.get('/user/:userID', function (req, res) {
  var userID = req.params.userID
  connection.query('SELECT * FROM assignment WHERE userID = ? order by dueDate', [userID], function (err, rows, fields) {
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

router.get('/:userID/class/:classID', function (req, res) {
  var userID = req.params.userID
  var classID = req.params.classID
  connection.query('SELECT * FROM assignment WHERE userID = ? AND classID = ? order by dueDate', [userID, classID], function (err, rows, fields) {
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

router.get('/:userID/type/:assignmentType', function (req, res) {
  var userID = req.params.userID
  var assignmentType = req.params.assignmentType
  connection.query('SELECT * FROM assignment WHERE userID = ? AND assignmentType = ? order by dueDate', [userID, assignmentType], function (err, rows, fields) {
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

router.get('/:userID/completion/:completionStatus', function (req, res) {
  var userID = req.params.userID
  var completionStatus = req.params.completionStatus
  connection.query('SELECT * FROM assignment WHERE userID = ? AND completionStatus = ? order by dueDate', [userID, completionStatus], function (err, rows, fields) {
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



router.post('/:userID/:classID/', async (req, res) => {
  var userID = req.params.userID
  var classID = req.params.classID
  var name = req.body.name
  var description = req.body.description
  var dueDate = req.body.dueDate
  var assignmentType = req.body.assignmentType

  connection.query('INSERT INTO `canvasplus`.`assignment` (userID, classID, name, description, dueDate, assignmentType, completionStatus) VALUES(?, ?, ?, ?, ?, ?, 0)',
  [userID, classID, name, description, dueDate, assignmentType], function (err, rows, fields) {
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

router.put('/:assignmentID/name', function (req, res) {
  var assignmentID = req.params.assignmentID
  var name = req.body.name
  connection.query('UPDATE assignment SET name = ? WHERE assignmentID = ?', [name, assignmentID], function (err, rows, fields) {
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

router.put('/:assignmentID/desc', function (req, res) {
  var assignmentID = req.params.assignmentID
  var description = req.body.desc
  connection.query('UPDATE assignment SET description = ? WHERE assignmentID = ?', [description, assignmentID], function (err, rows, fields) {
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

router.put('/:assignmentID/date', function (req, res) {
  var assignmentID = req.params.assignmentID
  var dueDate = req.body.dueDate
  connection.query('UPDATE assignment SET dueDate = ? WHERE assignmentID = ?', [dueDate, assignmentID], function (err, rows, fields) {
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

router.put('/:assignmentID/type', function (req, res) {
  var assignmentID = req.params.assignmentID
  var assignmentType = req.body.assignmentType
  connection.query('UPDATE assignment SET assignmentType = ? WHERE assignmentID = ?', [assignmentType, assignmentID], function (err, rows, fields) {
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

router.put('/:assignmentID/completion', function (req, res) {
  var assignmentID = req.params.assignmentID
  var completionStatus = req.body.completionStatus
  connection.query('UPDATE assignment SET completionStatus = ? WHERE assignmentID = ?', [completionStatus, assignmentID], function (err, rows, fields) {
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
  connection.query('DELETE FROM `canvasplus`.`assignment` a WHERE a.assignmentID = ?', [assignmentID], function (err, result, fields) {
    if (err)
      return console.error(error.message)
    res.end(JSON.stringify(result))
  })
})

module.exports = router