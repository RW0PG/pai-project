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

router.post('/', function (req, res) {
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const wage = req.body.wage

    db.query("INSERT INTO employees (name, age, country, position, wage) VALUES (?, ?, ?, ?, ?)", [name, age, country, position, wage],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("values added to database")
            }
        })
})

module.exports = router
