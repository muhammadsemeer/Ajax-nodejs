const express = require("express");
const router = express.Router();

const userData = [
    { id: 1, name: "Muhammad Semeer", company: "Galaxioen" },
    { id: 2, name: "Risvana", company: "Galaxieon" },
    { id: 3, name: "Sabiq", company: "Galaxieon" },
    { id: 4, name: "Sabiq", company: "SB" },
];

router.get("/user", (req, res) => {
    const userid = parseInt(req.query.id);
    const username = req.query.name;
    const filterUserData = userData.filter((data) => {
        if (userid || username) {
            return data.id === userid || data.name === username;
        } else {
            return data;
        }
    });

    res.json(filterUserData);
});
router.post("/user/:id", (req, res) => {
    const userid = parseInt(req.params.id);
    const filterUserData = userData.filter((data) => data.id === userid);

    res.json(filterUserData);
});

module.exports = router;
