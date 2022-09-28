const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.use("/static", express.static("static"));

app.set("view engine", "pug");

//set the views directory
app.set("views", path.join(__dirname, "views"));


app.listen(port, () => {
  console.log(`The application started successfully on port ${port} `);
});
