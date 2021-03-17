const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || "8000";

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))

const server = app.listen(80, () => {
    console.log('Express running -> PORT ${server.address().port}');
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", {title: "Home"});
});

