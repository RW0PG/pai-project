var express = require('express')
var router = express.Router()


var mysql = require('mysql2')

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE} = process.env;
const db = mysql.createConnection({
    host:  DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
})

db.connect((err) => {
    if (err)
        throw err
    console.log("connected")
})


router.get('/', function(req, res, next) {
    db.query("SELECT * FROM employees", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

module.exports = router
