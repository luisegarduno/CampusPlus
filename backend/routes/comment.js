const router = require('express').Router()
const connection = require('../connection')

router.get('/', function (req, res) {
    connection.query('SELECT * FROM comment', function (err, rows, fields) {
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

  router.get('/:commentID', function (req, res) {
    var commentID = req.params.commentID
    connection.query('SELECT * FROM comment where commentID = ?', [commentID], function (err, rows, fields) {
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
    connection.query('SELECT * FROM comment where userID = ?', [userID], function (err, rows, fields) {
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

  router.get('/class/:classID', function (req, res) {
    var classID = req.params.classID
    connection.query('SELECT * FROM comment where classID = ?', [classID], function (err, rows, fields) {
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

  router.post('/:userID/:classID', function (req, res) {
    var userID = req.params.userID
    var classID = req.params.classID
    var title = req.body.title
    var body = req.body.body
    connection.query('INSERT INTO comment (userID, classID, title, body, postTime) VALUES (?, ?, ?, ?, NOW())', [userID, classID, title, body], function (err, rows, fields) {
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

  router.put('/:commentID/title', function (req, res) {
    var commentID = req.params.commentID
    var title = req.body.title
    connection.query('UPDATE comment SET title = ? WHERE commentID = ?', [title, commentID], function (err, rows, fields) {
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

  router.put('/:commentID/body', function (req, res) {
    var commentID = req.params.commentID
    var body = req.body.body
    connection.query('UPDATE comment SET body = ? WHERE commentID = ?', [body, commentID], function (err, rows, fields) {
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


  router.delete('/:commentID', function (req, res) {
    var commentID = req.params.commentID
    connection.query('DELETE FROM comment WHERE commentID = ?', [commentID], function (err, rows, fields) {
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


module.exports = router