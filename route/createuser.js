const express = require("express");
const router = express.Router();
const mysql = require("mysql");

router.post("/createuser", (req, res) => {
    const { name, email, password } = req.body;
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "galaxieon",
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected");
        var sql = `INSERT INTO users VALUES ('${name}', '${email}', '${password}')`;
        connection.query(sql, (error) => {
            if (error) throw error;
            console.log("Query OK");
        });
    });
});

module.exports = router;
