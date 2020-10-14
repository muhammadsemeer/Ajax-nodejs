const express = require("express");
const router = express.Router();
const mysql = require("mysql");
// const database = require("./mysql");

const userArray = [];

router.post("/addUser", (req, res) => {
    userArray.push(req.body);
    console.log(userArray);
    res.json("Data addded Sucessfully");
});
router.get("/displayUser", (req, res) => {
    res.json(userArray);
});

router.get("/createTable", (req, res) => {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "galaxieon",
    });

    // connection.connect((err) => {
    //     if (err) throw err;
    //     console.log("Connected");
    //     var sql = "CREATE TABLE users (ID int PRIMARY KEY,  name VARCHAR(255), email VARCHAR(255) UNIQUE, password VARCHAR(255))";
    //     connection.query(sql, (error) => {
    //         if (error) throw error;
    //         console.log("Table Created");
    //     });
    // });
    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected");
        var sql =
            "INSERT INTO users  VALUES('Muhammad Semeer','muhammadsemeer.ms@gmail.com','123')";
        connection.query(sql, (error) => {
            if (error) throw error;
            res.send("Query OK")
        });
    });
});

module.exports = router;
