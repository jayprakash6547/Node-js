//It is used to import any module and in this module i am import express so i use express 

const express = require("express");
const path = require("path");
const app = express();
const port = 80;
// For serving static files
app.use("/static", express.static("static"));

// set the template engine as pug
app.set("view engine", "pug");

//set the views directory
app.set("views", path.join(__dirname, "views"));


app.listen(port, () => {
  console.log(`The application started successfully on port ${port} `);
});
