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


router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    console.log("id " + id)
    db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


module.exports = router
