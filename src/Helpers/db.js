const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'www.db4free.net',
    user: 'zwallet_client',
    password: 'zwalletClient',
    database: 'zwallet1'
})

conn.connect()

module.exports = conn