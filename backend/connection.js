const mysql = require('mysql')

let connection

const db_config = {
  host: process.env.MYSQL_CLOUD_HOST,
  user: process.env.MYSQL_CLOUD_USER,
  password: process.env.MYSQL_CLOUD_PASS,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DB
}

handleDisconnect = () => {
  connection = mysql.createConnection(db_config) // Recreate the connection, since the old one can't be reused

  connection.connect(function(err) {              // The server is either down or restarting (takes a while sometimes).
    if(err) {
      logger.error("Cannot connect to DB!")
      console.log('Error when connecting to DB:', err)
      setTimeout(handleDisconnect, 2000)         // Introduce a delay before attempting to reconnect, to avoid a hot loop, & to allow node script to 
    }                                             // process asynchronous requests in the meantime. If http is also served, display a 503 error. 
    else{
      logger.info("Connected to the DB!")
    }
  })

  connection.on('error', function(err) {
    console.log('DB error', err)
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually lost due to either server restart or
      handleDisconnect()                         // a connection idle timeout (the wait_timeout server variable configures this)
    } else {
      throw err
    }
  })
}

handleDisconnect()

module.exports = connection