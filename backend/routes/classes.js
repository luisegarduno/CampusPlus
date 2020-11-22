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

module.exports = router