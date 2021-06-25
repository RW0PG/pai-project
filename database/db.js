var mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'docker'
})

db.connect((err) => {
    if (err)
        throw err
    console.log("connected")
})

export default db
