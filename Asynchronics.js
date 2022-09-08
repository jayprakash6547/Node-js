const fs= require("fs");
fs.readFile("delete.txt" , "utf-8",(err,data)=>{
    console.log(data);
});
console.log("This is a message");
