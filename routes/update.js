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

router.put("/", (req, res) => {
    const id = req.body.id;
    const wage = req.body.wage;
    db.query("UPDATE employees SET wage = ? WHERE id = ?",
        [wage, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

module.exports = router
