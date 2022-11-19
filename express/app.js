//It is used to import any module and in this module i am import express so i use express 

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;


//EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static"));// For serving static files
app.use(express.urlencoded())

//PUG SPECIFIC PUG

app.set("view engine", "pug");// set the template engine as pug
app.set("views", path.join(__dirname, "views"));//set the views directory



// ENDPOINTS

app.get('/' ,(req,res)=>{
  const con ="This is the best content ont the internet so far so use it wisely"
  const params ={'title': 'PubG is the best game',"content":con}
  res.status(200).render('index.pug',params);
})

app.post('/',(req,res)=>{
  name = req.body.name
  age = req.body.age
  gender = req.body.gender
  address = req.body.address
  more = req.body.more
  
  let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    res.status(200).render('index.pug', params);
  const params ={'message': 'Your form has been submitted successfully',}

  res.status(200).render('index.pug',params);

})

// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port} `);
});
