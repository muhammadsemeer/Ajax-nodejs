const express = require("express");
const app = express();
const cors = require("cors");
const staticData = require("./route/staticData");
const dynamicData = require("./route/dynamicData");
const createuser = require("./route/createuser");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(staticData);
app.use(dynamicData);
app.use(createuser);

app.get("*", (req, res) => {
    res.status(404).json("No Route Available");
});

const PORT = process.env.PORT || 3002;

app.listen(PORT);
