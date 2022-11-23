const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

const db = require("./database");
git commit -m "first commit"
app.get("/photos", (req, res) => {
  db.query("SELECT * FROM photos;", function (error, results) {
    if (error) throw error;

    res.json(results);
  });
});


app.listen(3000, () => {});